FROM node:current-alpine
WORKDIR /portfolio

COPY package*json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm","run","dev"]