import os
import hashlib

file_hashes = {}

def is_same_size(file1, file2):
  return os.path.getsize(file1) == os.path.getsize(file2)

def get_next_hash(file):
  hasher    = hashlib.sha256()
  BLOCKSIZE = 65536

  with open(file, "rb") as afile:
    buf = afile.read(BLOCKSIZE)
    while len(buf) > 0:
      hasher.update(buf)
      buf = afile.read(BLOCKSIZE)
      yield hasher.hexdigest()
  return None

def is_same_content(file1, file2):
  file1hasher = get_next_hash(file1)
  file2hasher = get_next_hash(file2)

  for file1hash in file1hasher:
    file2hash = next(file2hasher)
    if file1hash != file2hash:
      return False

  file_hashes[file1] = file1hash
  file_hashes[file2] = file2hash

  return True

print(is_same_size("moby.txt", "moby_copy.txt"))
print(is_same_content("moby.txt", "moby_copy.txt"))
print(file_hashes)
