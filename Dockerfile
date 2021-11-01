FROM alpine:3.8

ENV NODE_VERSION 8.15

# Build rizzanet admin app
RUN apk --no-cache add curl bash
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.8/main/ nodejs=8.14.0-r0 npm 

# Dupe files
COPY ./package-lock.json /app/package-lock.json 
WORKDIR /app/
RUN npm install

COPY . /app/


# Install dir
#RUN npm run build_rizzanet

VOLUME /app/

CMD ['tail -f /dev/null']