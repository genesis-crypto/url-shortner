FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -la

RUN npm run compile

CMD [ "npm", "run", "start:dev" ]
