# Use the appropriate Node.js base 18.16
FROM node:18.16 AS builder

# Create a working directory
WORKDIR /src

# Copy package.json and package-lock.json (if exists) to /tmp
COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json

# Install dependencies in /tmp
RUN cd /tmp && npm install

# Copy the project code to /src
COPY . /src

# Copy the node_modules from /tmp to /src
RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

# Copy the prisma directory to /src/prisma
COPY ./prisma ./prisma

# Install the Prisma CLI inside the Docker image
RUN npm install -g prisma

# Generate the Prisma client
RUN prisma generate

# Build the project
RUN npm run build

EXPOSE 8000

# Specify the command to run your application
CMD ["node", "dist/src/index.js"]
