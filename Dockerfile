FROM node:19-bullseye
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "static", "index.js"]

RUN npm install

CMD ["npm", "start", "--trust-proxy"]