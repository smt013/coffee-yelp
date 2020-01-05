FROM golang:latest

ADD . /go
WORKDIR /go
ENV PORT=8080
EXPOSE 8080
CMD ["go", "run", "main.go"]
