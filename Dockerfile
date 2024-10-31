FROM node:20.18.0-alpine3.20

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --silent

COPY . .

CMD [ "yarn", "dev" ]