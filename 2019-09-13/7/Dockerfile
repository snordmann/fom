FROM alpine as builder
RUN apk add build-base
WORKDIR /usr/src/app
COPY . .
RUN gcc -o /app main.c

FROM alpine
COPY --from=builder /app /app
CMD ["/app"]
