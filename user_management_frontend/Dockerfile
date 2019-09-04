FROM node:lts-alpine
RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./

COPY . .

RUN npm install 
   
EXPOSE 8000
CMD ["npm", "run", "start"]