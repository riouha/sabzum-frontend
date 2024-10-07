FROM docker.arvancloud.ir/node:22-alpine as build
ENV NODE_ENV production
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM docker.arvancloud.ir/node:22-alpine
ENV NODE_ENV production
WORKDIR /app

COPY --from=build /app/.next /app/.next
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
COPY --from=build /app/next.config.js /app/next.config.js

EXPOSE 4101
ENTRYPOINT ["npm", "start"]