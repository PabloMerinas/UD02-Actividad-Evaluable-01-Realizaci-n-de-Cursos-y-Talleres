FROM alpine

ENV HOME=/mi_web
ENV ANGULAR_CLI_VERSION=latest

RUN mkdir $HOME
WORKDIR $HOME

RUN apk add --update nodejs nodejs-npm

RUN npm install -g @angular/cli@$ANGULAR_CLI_VERSION

EXPOSE 4200
EXPOSE 3000

CMD sh -c "npm install; npm run launchmix"