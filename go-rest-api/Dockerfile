FROM golang:latest

ADD src/go-login/ /go/src/app
WORKDIR /go/src/app

ENV PORT=8080

RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*

#RUN apk add --no-cache git
RUN apt-get install git
RUN go get -d -u github.com/gorilla/mux

RUN go get go.mongodb.org/mongo-driver/mongo
RUN go get github.com/dgrijalva/jwt-go

COPY . .

CMD ["go", "run", "main.go"]
