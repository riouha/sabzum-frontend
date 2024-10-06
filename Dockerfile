FROM node:alpine
# ENV NODE_ENV production
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
