FROM alpine as builder
RUN apk add build-base
WORKDIR /usr/src/app
ARG SRC_DIR="."
ARG GCC_EXTRA_ARGS=""
COPY ${SRC_DIR} .
RUN gcc -o /app ${GCC_EXTRA_ARGS} $(ls *.c)

FROM alpine
COPY --from=builder /app /app
CMD ["/app"]
