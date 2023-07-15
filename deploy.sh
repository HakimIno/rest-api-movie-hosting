#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose -f "$DOCKER_COMPOSE_FILE" up -d --build


