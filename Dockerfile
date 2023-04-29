FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json

RUN npm install

COPY static static/
COPY index.js .

RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]