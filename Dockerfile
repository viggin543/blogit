#
# Super simple example of a Dockerfile
#
FROM node:latest
MAINTAINER domrev igor "domrevigor@gmail.com"


ADD app /home/app

WORKDIR /home/app

RUN adduser --disabled-password  --disabled-login  myuser
RUN chown -R myuser /home
USER myuser

CMD npm run build