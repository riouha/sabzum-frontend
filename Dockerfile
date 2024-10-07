FROM node:alpine as build
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN npm run build

FROM node:alpine
ENV NODE_ENV production
WORKDIR /app

COPY --from=build /app/.next /app/.next
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
COPY --from=build /app/components.json /app/components.json

EXPOSE 4100
ENTRYPOINT ["npm", "start"]