FROM node:14-alpine

ENV HOSTNAME=db
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=password

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]