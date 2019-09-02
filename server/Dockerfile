# Builder
FROM mhart/alpine-node:10 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Runner
FROM mhart/alpine-node:slim-10 AS runner
WORKDIR /app
COPY --from=builder ./app/dist .
COPY --from=builder ./app/node_modules ./node_modules

EXPOSE 4000
CMD ["node", "app.js"]
