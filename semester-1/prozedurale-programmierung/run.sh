#!/bin/bash

function usage() {
  echo "Usage: $(basename "$0") -f SRC [-t TAG] [-d] [--extra-args ARGS]" >&2
  echo
  echo "  Build and run C code"
  echo
  echo "   -h, --help                 Show this message"
  echo "   -f, --file                 The path to the C source code directory to build and run"
  echo "   -t, --tag                  Set an image name"
  echo "   -d                         Don't start the container immediately"
  echo "   --extra-args               Extra Arugments for GCC"
  echo

  exit 1
}

#Args: SRC_DIR, EXTRA_ARGS
#Returns: imageId
function buildImage() {
  local imageId=$(docker build -q --build-arg SRC_DIR=$1 --build-arg GCC_EXTRA_ARGS=$2 .)
  echo $imageId
}

#Args: imageId, imagename
function tagImage() {
  docker tag $1 $2
}

#Args: imageId
function runImage() {
  docker run --rm -it $1
}

while :
do
  case "$1" in
    -h|--help)
      usage
      exit 0
      ;;
    -f|--file)
      # TODO: validate input length and chars
      FILE="$2"
      shift 2
      ;;
    -t|--tag)
      # TODO: validate input length and chars
      TAG="$2"
      shift 2
      ;;
    --extra-args)
      # TODO: validate input length and chars
      EXTRA_ARGS="$2"
      shift 2
      ;;
    -d)
      RUN="1"
      shift
      ;;
    --)
      shift
      break
      ;;
    -*)
      echo "Error: Unknown option: $1" >&2
      echo
      usage
      exit 1
      ;;
    *)
      break
      ;;
  esac
done

if [ -z "$FILE" ]; then
  echo "Error: FILE is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

EXTRA_ARGS=${EXTRA_ARGS:-""}

imageid=$(buildImage $FILE $EXTRA_ARGS)
echo "Built image "${imageid}

if [ ! -z "$TAG" ]; then
  tagImage ${imageid} ${TAG}
  echo "Tagged image "${TAG}
fi

if [ -z "$RUN" ]; then
  echo "Starting container"
  echo "---------------------------------"
  runImage ${imageid}
fi
