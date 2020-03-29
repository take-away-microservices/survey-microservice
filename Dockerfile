# Latest LTS node version
FROM node:12.16.0

# Working directory
RUN mkdir -p /app
WORKDIR /app

# Enable in development mode
ENV NODE_ENV development

# Pass the package json and install dependencies
COPY ./package.json /app
RUN yarn install --silent

COPY . /app

