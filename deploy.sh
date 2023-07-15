#!/bin/bash

cd "$(dirname "$0")"

echo "Pulling"
git pull

echo "Building application"
docker-compose up -d --build