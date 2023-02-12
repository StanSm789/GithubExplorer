FROM golang:latest

WORKDIR /
COPY . .

RUN go build -o main .

CMD ["./main"]

EXPOSE 8000
