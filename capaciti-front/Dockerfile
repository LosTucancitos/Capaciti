FROM node:lts-alpine3.15

WORKDIR /usr/src/app

COPY ./capaciti-front/package*.json ./

RUN ls -la

RUN npm install

COPY ./capaciti-front .

EXPOSE 3000

CMD [ "npm", "start" ]
