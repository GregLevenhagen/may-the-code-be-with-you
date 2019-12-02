##################################################################
# Stage 0: Build the application
##################################################################
FROM node:10-stretch-slim as build
WORKDIR /app

# Copy package files and npm install
COPY ./package*.json ./
RUN npm install

# Copy all other files and run the NPM build
COPY ./ ./
RUN npm run build

##################################################################
# Stage 1: Copy App into a Clean Image
##################################################################
FROM nginx:1.15-alpine
EXPOSE 80
EXPOSE 8080
WORKDIR /usr/share/nginx/html

# Installing dependencies
RUN apk add --no-cache bash

# Copy assets, configurations, and shell scripts
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/ /etc/nginx/conf.d/
COPY ./env.sh .
COPY ./.env .

# Grant appropriate permissions to run environment shell script
RUN chmod +x env.sh

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]