# Fetching the minified node image on apline linux
FROM node:alpine3.18

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /backend-app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "yarn", "dev" ]