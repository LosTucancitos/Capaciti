FROM node:16.15

WORKDIR /usr/src/app

COPY ./capaciti-front/package*.json ./

CMD ["ls", "-l"]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
