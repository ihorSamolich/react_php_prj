FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5050

CMD [ "npm", "run", "preview" ]

## Використовуємо офіційний образ Node.js
#FROM node:latest
#
## Встановлюємо робочу директорію в контейнері
#WORKDIR /app
#
## Копіюємо файли залежностей та установлюємо їх
#COPY package.json package-lock.json ./
#RUN npm install
#
## Копіюємо весь вихідний код
#COPY . .
#
## Будуємо проект
#RUN npm run build
#
#EXPOSE 8080
#
## Запускаємо додаток Next.js
#CMD ["npm", "run", "dev"]
