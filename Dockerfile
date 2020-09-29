FROM node:latest as build

# set up angular cli
RUN yarn global add @angular/cli@1.2.6

WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install --silent && $(npm bin)/ng build --prod


# create watch files
CMD node server.js
EXPOSE 4200