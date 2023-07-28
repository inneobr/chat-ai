FROM node:lts as dependencies
WORKDIR /chat-ai
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /chat-ai
COPY . .
COPY --from=dependencies /chat-ai/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /chat-ai
ENV NODE_ENV production

COPY --from=builder /chat-ai/public ./public
COPY --from=builder /chat-ai/.next ./.next
COPY --from=builder /chat-ai/node_modules ./node_modules
COPY --from=builder /chat-ai/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]