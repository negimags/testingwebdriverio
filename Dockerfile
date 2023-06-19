# Use an official Node.js runtime as the base image
FROM node:16

# Install required dependencies
RUN apt-get update && apt-get install -y curl gnupg ca-certificates

# Download and install Google Chrome
RUN curl -sSL -o chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i chrome.deb || apt-get install -yf

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm ci --only=production

# Copy the project files to the working directory in the container
COPY . .

# Expose any required ports (if applicable)
# EXPOSE <port>

# Define the command to run your application
CMD [ "npm", "install", "wdio" ]
