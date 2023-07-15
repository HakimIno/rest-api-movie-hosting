#!/bin/bash

echo "Pulling"
git pull 

echo "Building application"

docker-compose build

docker-compose up -d 