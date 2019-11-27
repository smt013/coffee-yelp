FROM golang:alpine
ADD /go-server/src /go/src/app
WORKDIR /go/src/app
ENV PORT=3001
RUN go build -o main .
EXPOSE 3030
CMD ["./main"]
#CMD ["go", "run", "main.go"]
