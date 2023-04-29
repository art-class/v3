FROM node:18
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "static", "index.js", "/app/"]

RUN npm install

RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]