#!/bin/bash

cat <<EOF >docker-compose.yaml
version: '2'

services:
  mariadb:
    image: 'mysql:8.0.20'
    ports:
      - '3306:3306'
    volumes:
      - 'mysql_data:/var/lib/mysql'
    environment:
      # ALLOW_EMPTY_PASSWORD is recommended only for development.
      - MYSQL_ALLOW_EMPTY_PASSWORD=yes

volumes:
  mysql_data:
    driver: local
EOF

docker-compose up -d
