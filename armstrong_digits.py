n = 153
num = n
count = 0
num_of_digits = len(str(n))
while num > 0 :
    last_digit = num%10
    count = count+(last_digit**num_of_digits)
    num = num//10
print(count)

if(count == n) :
    print("Its a armstrong number")
else:
    print("Its not a armstrong number")