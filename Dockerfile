FROM node:19-bullseye
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . .
RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]