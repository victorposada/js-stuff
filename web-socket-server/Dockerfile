FROM node:18
LABEL org.opencontainers.image.source=https://github.com/victorposada/js-stuff
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "server.js"]
