FROM node:18
WORKDIR /app

COPY package.json .
COPY package*.json .
RUN npm install

COPY . .
COPY ./next ./next

CMD npm run start
