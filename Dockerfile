FROM node:18-alpine

WORKDIR /home/login-app
COPY ./app/ /home/login-app/
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
