"""
while(True):
    a, b = map(int, input().split())
    if(a != 0 and b!= 0):
        if(a<=b):
            print(f"{a} {b}")
        else:
            print(f"{b} {a}")
    else:
        break
"""

"""
a, b, c = map(int, input().split())
count = 0
for tmp in range(b-a+1):
    if(c%(a+tmp)==0):#tmp=0でaの値と同じ
        count = count +1
print(count)
"""


"""
a, b = map(float, input().split())
print(int(a/b))
print(a%b)
print('{:.5f}'.format(a/b)) #5桁まで表示
"""

"""
import math
a=float(input())
print(a*a*math.pi)
print(a*2*math.pi)
"""

"""
while(True):
    a, b, c = input().split()
    if(b == '+'):
        print(int(a)+int(c))
    elif(b =='-'):
        print(int(a)-int(c))
    elif(b=='*'):
        print(int(a)*int(c))
    elif(b=='/'):
        print(int(int(a)/int(c)))
    elif(b=='?'):
        break
"""

"""何個かわからない一列のもの🟨
num = input()
a= input().split()
sum=0
for tmp in range(len(a)):
    a[tmp] = int(a[tmp])
    sum = a[tmp]+sum
print(min(a),max(a),sum)
"""


"""5-a
while(True):
    a, b = map(int, input().split())
    if a==0 and b==0:
        break
    else:
        for r in range(a):
            for c in range(b):
                print("#", end="")
            print("")
        print("")
"""

"""5-b
while(True):
    a, b = map(int, input().split())
    if a==0 and b==0:
        break
    else:
        for r in range(a):
            for c in range(b):
                if r==0 or r==a-1 or c==0 or c==b-1:
                    print("#", end="")
                else:
                    print(".", end="")
            print("")
        print("")
"""

"""5-c
while(True):
    a, b = map(int, input().split())
    if a==0 and b==0:
        break
    else:
        for r in range(a):
            for c in range(b):
                if r%2==0 :
                    if c%2==0:
                        print("#", end="")
                    else:
                        print(".", end="")
                else:
                    if c%2==0:
                        print(".", end="")
                    else:
                        print("#", end="")
            print("")
        print("")
"""

"""5-d
N = int(input())
x = 0

for i in range(1,N+1):

    if i%3 == 0:
            print(" %d"%i,end = "");
    else:
        x = i
        while (x):
            if x%10 == 3:
                print(" %d"%i,end = "")
                break
            x //= 10
print()
"""

"""6-a
num = int(input())
a= input().split()
sum=0
for tmp in range(len(a)):
    a[tmp] = int(a[tmp])
for tmp in range(len(a)):
    print(a[len(a)-1-tmp], end="")
    if(tmp != len(a)-1):
        print(" ", end="")
print()
"""

"""6-b
cards = [[False for i in range(13)] for j in range(4)]
num = int(input())
for i in range(num):
    a,b = input().split()
    b = int(b)
    if(a=='S'):
        cards[0][b-1] = True
    elif(a=='H'):
        cards[1][b-1] = True
    elif(a=='C'):
        cards[2][b-1] = True
    elif(a=='D'):
        cards[3][b-1] = True
        
for i in range(4):
    for j in range(13):
        if(cards[i][j]==False):
            if(i==0):
                print(f"S {j+1}")
            elif(i==1):
                print(f"H {j+1}")
            elif(i==2):
                print(f"C {j+1}")
            elif(i==3):
                print(f"D {j+1}")
"""

"""7-a
while True:
    M,F,R = map(int,input().split())
    if M == -1 and F == -1 and R == -1:
        break
    if M == -1 or F == -1:
        print("F")
    elif M+F >= 80:
        print("A")
    elif M+F >= 65:
        print("B")
    elif M+F >= 50:
        print("C")
    elif M+F >= 30:
        if R >= 50:
            print("C")
        else:
            print("D")
    else:
        print("F")

"""

"""7-b
while True:
    N,X = map(int,input().split())
    if N == 0 and X == 0:
        break

    ans = 0
    for i in range(1,N-1):
        for k in range(i+1,N):
            p = X-(i+k)
            if p < 0 or p > N:
                continue
            if p > k:
                ans += 1

    print(ans)
"""

"""7-c
r,c=map(int,input().split())
a=[list(map(int,input().split())) for i in range(r)]
ans=[[0]*(c+1) for i in range(r+1)]
for i in range(r):
    for j in range(c):
        ans[i][j]=a[i][j]
        ans[i][c]+=a[i][j]
        ans[r][j]+=a[i][j]
        ans[r][c]+=a[i][j]
for i in range(r+1):
    for j in range(c+1):
        if j>0:print(" ",end='')
        print(ans[i][j],end='')
    print()
"""


"""7-d
n,m,l=map(int,input().split())
a=[list(map(int,input().split())) for i in range(n)]
b=[list(map(int,input().split())) for i in range(m)]
c=[[0]*l for i in range(n)]
for i in range(n):
    for j in range(l):
        for k in range(m):
            c[i][j]+=a[i][k]*b[k][j];
for i in range(n):
    for j in range(l):
        if j>0:print(" ",end='')
        print(c[i][j],end='')
    print()
"""

"""8-a
print(input().swapcase())
"""

"""8-b
while True:
    x=int(input())
    if x==0:break
    ans=0
    while x>0:
        ans+=x%10
        x//=10
    print(ans)
"""

"""8-c
import sys
s=[x.lower() for x in sys.stdin.read().split()]
s = "".join(s)
for i in range(26):
	print(chr(97+i)+ " : " + str(s.count(chr(97+i))))
"""