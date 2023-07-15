#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose -f /home/kimsnow/Desktop/App/Moive/movie-server/docker-compose.yml up -d --build


