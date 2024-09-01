FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "expo", "start", "--web" "--port=5173"]
