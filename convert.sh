#!/bin/sh

PROTO_SRC=./order.proto
OUT_DIR=./src/generated

mkdir -p $OUT_DIR

protoc -I=. $PROTO_SRC \
  --js_out=import_style=commonjs:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR
