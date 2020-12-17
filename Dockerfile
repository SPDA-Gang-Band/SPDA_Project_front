FROM node:14.4.0-alpine3.10
USER root
WORKDIR /app/frontend
COPY . /app/frontend
RUN npm install