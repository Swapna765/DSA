n = 234557789
num = n
count = 0
while num > 0 :
    last_digit = num%10
    count = count*10 +last_digit
    num = num//10
print(count)