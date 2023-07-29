FROM node:18-alpine

ENV NODE_ENV=production
ENV HOST=0.0.0.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]