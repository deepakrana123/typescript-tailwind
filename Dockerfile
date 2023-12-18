#use the offical node.js image as the base image

FROM node:18.17-slim AS development


#Set the working directory inside the container

WORKDIR /docker-react

#Copy package.json and package-lock.json to the container

COPY package.json .

#Install dependencies

RUN npm install


#Copying all the files in our project

COPY . .


# Exose port 5173 for development server (not really necessary)
EXPOSE 3000

#Start the react developement server with hot-realoding

CMD ["npm","run","dev"]

