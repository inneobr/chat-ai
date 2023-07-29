FROM node:18-alpine
WORKDIR /src/app
COPY . .

RUN npm install --production
RUN npm run build
CMD ["nmp", "start"]
