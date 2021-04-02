FROM alpine:latest

RUN apk add --update nginx && rm -rf /var/cache/apk/*
COPY etc/nginx.conf /etc/nginx/nginx.conf
COPY vhost.conf /etc/nginx/conf.d/default.conf
COPY ../db /etc

# forward request and error logs to docker log collector
RUN ln -svf /dev/stdout /var/log/nginx/access.log \
    && ln -svf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
