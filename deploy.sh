#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose -f ./docker-compose.yml up -d --build


