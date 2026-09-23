n = 2323232
num = n
count = 0
while num > 0 :
    last_digit = num%10
    count = count*10 +last_digit
    num = num//10
print(count)

if(count == n) :
    print("Its a palindrome number")
else:
    print("Its not a palindrome number")