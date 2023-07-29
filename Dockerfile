FROM node:18-alpine AS build 
WORKDIR /app 
COPY package.json package-lock.json ./ 
RUN npm ci COPY . . 
RUN npm run build 

FROM node:18-alpine 
WORKDIR /app 
COPY --from=build /app/package.json /app/package-lock.json ./ 
RUN npm install --production 
COPY --from=build /app/.next ./.next 
COPY --from=build /app/public ./public 
EXPOSE 3000 
CMD ["npm", "start"]