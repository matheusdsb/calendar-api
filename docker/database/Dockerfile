FROM postgres:11.2-alpine

RUN apk --update add  --repository https://alpine.global.ssl.fastly.net/alpine/edge/testing/ tzdata postgresql-plpython2-contrib && echo ${TZ} > /etc/timezone

CMD ["postgres"]
