FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=4200

WORKDIR /app

COPY dist/apps/front .

RUN ["yarn", "global", "add", "serve"]
RUN ["yarn"]

CMD [ "serve", "-s" ]
