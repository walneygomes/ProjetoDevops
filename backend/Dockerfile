FROM node:13
COPY . .
ENV PORTA=5003
ENV DATABASE_URL=mongodb://gametap/lojagame

RUN npm install

ENTRYPOINT node app.js