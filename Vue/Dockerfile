# build stage
FROM node:18-alpine AS build
WORKDIR /app

# 从 docker-compose build.args 接收环境变量
ARG VITE_HTTP_SERVER_URL
ARG VITE_SOCKET_SERVER_URL
ARG VITE_WS_SERVER_URL
ARG VITE_WS_PERMISSION_URL

# 将这些ARG设置为ENV，以便vite构建过程可以访问
ENV VITE_HTTP_SERVER_URL=$VITE_HTTP_SERVER_URL
ENV VITE_SOCKET_SERVER_URL=$VITE_SOCKET_SERVER_URL
ENV VITE_WS_SERVER_URL=$VITE_WS_SERVER_URL
ENV VITE_WS_PERMISSION_URL=$VITE_WS_PERMISSION_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# serve stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 