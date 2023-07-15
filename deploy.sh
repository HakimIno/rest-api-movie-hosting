#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose up -d --build

echo "Executing deploy.sh"
./deploy.sh  # Make sure to provide the correct path if deploy.sh is not in the current directory

echo "Deployment complete"
