l = []

while True:
    n = int(input ("digite um numero (zero p/ sair)"))
    if n == 0:
        break
    l.append(n)

x = 0 
while x < len(l):
    print(l[x])
    x +=1