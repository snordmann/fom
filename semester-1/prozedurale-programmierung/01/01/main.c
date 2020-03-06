#include <stdio.h> // The code from `stdio.h` will be injected here
/**
 * The *.h files contain only the function definitions (return
 * types and arguments). The linker adds the *.c files that are
 * actually needed based on the included *.h file.
 */

/**
 * The main function is the entry point to the file
 *
 * The return value (an int) is returned to the operating
 * system to know the software status (0 means ok).
 *
 * The main function could also take some arguments, but
 * that is complexity that I currently don't want for the
 * "Hello, World!" program.
 * If you are interested: https://stackoverflow.com/a/25347249
 */
int main (void) { // void means that the function takes no arguments
  printf("Hello, World!\n");

  return 0; // Tell the system that the program exited sucessfully
}
