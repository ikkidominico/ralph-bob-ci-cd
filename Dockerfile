FROM node:20.18.0-alpine3.20 AS development

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json yarn.lock ./

RUN yarn install --silent

COPY . .

CMD [ "yarn", "dev" ]

FROM development AS builder

RUN yarn build

FROM node:20.18.0-alpine3.20 AS production

WORKDIR /app

ENV NODE_ENV=production

ARG APP_PORT=3333

COPY package*.json yarn.lock .env ./

RUN yarn install --production --silent

COPY --from=builder /app/dist ./dist

EXPOSE ${APP_PORT}

CMD ["yarn", "start"]