FROM node:lts-alpine3.20

WORKDIR /www/FRONT/docker-projet

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm" , "run" , "dev"  ]
