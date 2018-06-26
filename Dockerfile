FROM node:9.11
MAINTAINER me@me.com

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
# COPY package.json /app/

# Copy the main application.
COPY . ./

RUN npm install

# Build and optimize react app
RUN npm run build:dll

# Expose port 8080 to the Docker host, so we can access it
# from the outside.
EXPOSE 8080

# The main command to run when the container starts. Also
# tell the Rails dev server to bind to all interfaces by
# default.
CMD [ "npm", "start" ]
