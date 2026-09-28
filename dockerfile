FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*

COPY . .

EXPOSE 80

RUN sed -i 's/index  index.html/index  Home.html/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]