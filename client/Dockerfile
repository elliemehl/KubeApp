FROM node:latest

RUN mkdir -p /var/app/
WORKDIR /var/app

COPY . ./

RUN npm i

CMD node index.js