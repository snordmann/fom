FROM alpine as builder
RUN apk add build-base
WORKDIR /usr/src/app
ARG SRC_DIR="."
ARG GCC_EXTRA_ARGS=""
COPY ${SRC_DIR} .
RUN gcc -Werror-implicit-function-declaration -o /app ${GCC_EXTRA_ARGS} $(ls *.c)

FROM alpine
WORKDIR /app
RUN apk add gdb
COPY --from=builder /app ./bin
COPY --from=builder /usr/src/app .
CMD ["./bin"]
