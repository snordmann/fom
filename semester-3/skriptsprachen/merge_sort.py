def merge(list1, list2):
  rl = list()
  while len(list1) > 0 and len(list2) > 0:
    if list1[0] <= list2[0]:
      rl.append(list1.pop(0))
    else:
      rl.append(list2.pop(0))
  return rl + list1 + list2

def merge_sort(l):
  if len(l) <= 1:
    return l
  middle = len(l) // 2
  first, second = l[:middle],l[middle:]
  return merge(merge_sort(first), merge_sort(second))

import random

unsorted = random.sample(range(10,99), 15)

print(unsorted)
print(merge_sort(unsorted))
