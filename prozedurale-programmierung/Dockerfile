FROM alpine as builder
RUN apk add build-base
WORKDIR /usr/src/app
ARG SRC_DIR="."
COPY ${SRC_DIR} .
RUN gcc -o /app main.c

FROM alpine
COPY --from=builder /app /app
CMD ["/app"]
