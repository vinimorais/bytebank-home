FROM node:18.20 

WORKDIR /app 

COPY package*.json . 

RUN npm install 

COPY . . 

EXPOSE 8200 

ENTRYPOINT ["npm"]

CMD ["start", "--", "--port", "8200"]
