FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]