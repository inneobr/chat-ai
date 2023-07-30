FROM node:18
WORKDIR /app

COPY package.json .
COPY package*.json .
RUN npm install

COPY . .
RUN npm install

CMD npm run start
