FROM php:8.4-fpm-alpine

# 1. Install system dependencies
RUN apk add --no-cache \
    git \
    unzip \
    zip \
    curl \
    mysql-client \
    oniguruma-dev \
    libzip-dev
  #$#PHPIZE_DEPS

# 2. PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring bcmath zip

RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS linux-headers \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && apk del .build-deps

RUN apk add --no-cache icu-dev \
    && docker-php-ext-install intl
# 3. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. Set working directory
WORKDIR /var/www

# 7. Copy the rest of the application
COPY . .

# 6. Install dependencies (autoloader + vendor)
RUN composer install --no-interaction --optimize-autoloader

# 8. (Optional but good) regenerate optimized autoload
RUN composer dump-autoload --optimize

# 9. Expose PHP-FPM port
EXPOSE 9000

CMD ["php-fpm"]