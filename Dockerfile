FROM node:18-alpine as builder
WORKDIR /chat-ai

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /chat-ai
COPY --from=builder /chat-ai/package.json .
COPY --from=builder /chat-ai/package-lock.json .
COPY --from=builder /chat-ai/next.config.js ./
COPY --from=builder /chat-ai/public ./public
COPY --from=builder /chat-ai/.next/standalone ./
COPY --from=builder /chat-ai/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["npm", "start"]