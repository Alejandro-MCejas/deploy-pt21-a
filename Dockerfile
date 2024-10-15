FROM node:20-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm cache clean --force


COPY . .


RUN npm run build


EXPOSE 3000


CMD ["node", "dist/main"]

