n = 234557789
num = n
count = 0
while num > 0 :
    last_digit = num%10
    count = count+1
    # print(last_digit)
    num = num//10
print(count)


import math
def countdigit(number):
    return int(math.log10(number)+1)
print(countdigit(2234))