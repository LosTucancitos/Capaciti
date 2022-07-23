FROM node:lts-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN ls -la

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
