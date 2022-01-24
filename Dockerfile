FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY ./src ./src
COPY ./public ./public
COPY . .


RUN yarn && \ 
    yarn build && \
    yarn global add serve

CMD ["serve", "-s", "build"]

EXPOSE 3000