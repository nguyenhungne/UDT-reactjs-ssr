# Use the official Node.js 18 image from Docker Hub
FROM node:18

# Set the maintainer label
LABEL maintainer="miiro@getintodevops.com"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set a health check
HEALTHCHECK --interval=5s --timeout=5s \
  CMD curl -f http://localhost:8000 || exit 1

# Tell Docker what port to expose
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]
