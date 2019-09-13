# FOM

All source code for FOM.

Currently only for "Prozedurale Programmierung".

## Running the repository

### Prerequirements

- Bash
- Docker

### Using `run.sh`

```text
Usage: run.sh -f SRC [-t TAG] [-d]

  Build and run C code

   -h, --help                 Show this message
   -f, --file                 The path to the C source code directory to build and run
   -t, --tag                  Set an image name
   -d                         Don't start the container immediately
```

### Examples

```bash
$ cd prozedurale-programmierung/
$ ./run.sh -f 01/01
Built image sha256:9814770b9d172bd695585b0c087fb2cbfae0ae81369d240910983a810f640579
Starting container
---------------------------------
Hello, World!
```

```bash
$ ./run.sh -f 01/08 -d -t task8:v0.1.0
Built image sha256:fdfd75575e62e8ccf17c60808b5927d681fd0d942bbb43ee3ab2613ab677141c
Tagged image task8:v0.1.0

$ docker run --rm -it task8:v0.1.0
Second second calculator

Enter the number of seconds: 200000


200000s = 2d 7h 33m 20s
```
