FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
EXPOSE 9000

CMD ["npm", "run", "server"] 