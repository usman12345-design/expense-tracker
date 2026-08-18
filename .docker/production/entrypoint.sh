#!/bin/sh

set -e

PORT="${PORT:-10000}"
export PORT

echo "Starting application on port: $PORT"

envsubst '${PORT}' \
    < /etc/nginx/http.d/default.conf.template \
    > /etc/nginx/http.d/default.conf

echo "Generated Nginx configuration:"
cat /etc/nginx/http.d/default.conf

exec /usr/bin/supervisord -c /etc/supervisord.conf