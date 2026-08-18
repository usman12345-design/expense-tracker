FROM php:8.4-fpm-alpine

# --------------------------------------------------
# System dependencies
# --------------------------------------------------
RUN apk add --no-cache \
    nginx \
    supervisor \
    git \
    unzip \
    zip \
    curl \
    oniguruma-dev \
    libzip-dev \
    icu-dev \
    nodejs \
    npm \
    gettext

# --------------------------------------------------
# PHP extensions
# --------------------------------------------------
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    bcmath \
    zip \
    intl

# --------------------------------------------------
# Composer
# --------------------------------------------------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY composer.json composer.lock ./

# --------------------------------------------------
# Clean Composer installation
# --------------------------------------------------
RUN rm -rf vendor \
    && COMPOSER_PROCESS_TIMEOUT=1800 composer install \
        --no-interaction \
        --no-dev \
        --prefer-dist \
        --optimize-autoloader \
    && composer dump-autoload --no-dev --optimize

# --------------------------------------------------
# Copy application
# --------------------------------------------------
COPY . .
# --------------------------------------------------
# Runtime writable directories
# --------------------------------------------------
RUN mkdir -p \
    /var/www/storage/cache/templates \
     /var/www/storage/cache/doctrine/proxies \
    /var/www/storage/logs \
    && chown -R www-data:www-data /var/www/storage \
    && chmod -R 775 /var/www/storage

# --------------------------------------------------
# Frontend dependencies + production build
# --------------------------------------------------
RUN npm ci
RUN npm run build

# --------------------------------------------------
# Nginx
# --------------------------------------------------
COPY .docker/nginx/production.conf \
     /etc/nginx/http.d/default.conf.template

COPY .docker/production/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# --------------------------------------------------
# Supervisor
# --------------------------------------------------
COPY .docker/production/supervisord.conf \
     /etc/supervisord.conf

# --------------------------------------------------
# HTTP port
# --------------------------------------------------
EXPOSE 10000

# --------------------------------------------------
# Start Supervisor
# Supervisor starts Nginx + PHP-FPM
# --------------------------------------------------
CMD ["/usr/local/bin/entrypoint.sh"]