FROM node:8-alpine
RUN npm install -g @angular/cli && \
mkdir -p /app && \
apk add --update --no-cache shadow && \
useradd -m user&& \
chown user /app
EXPOSE 4200
