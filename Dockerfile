FROM node:18-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app/

COPY ./ ./

RUN npm install
RUN npm run builder

EXPOSE 3000
CMD ["npm", "start"]