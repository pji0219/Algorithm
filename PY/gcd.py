# 최대공약수 구하는 알고리즘1
# 입력: a, b
#출력: a와 b의 최대공약수

def gcd(a, b):
    i = min(a, b) # 두 수 중에서 최소값을 구하는 파이썬 함수
    while True:
        if a % i == 0 and b % i == 0: # 나누어 떨어지면 i로 리턴
            return i
        i = i - 1 # 나누어 떨어지지 않으면 -1 시켜서 나누어 떨어지는 수 찾음


print(gcd(3, 6))
print(gcd(60, 24))


# 최대공약수 구하는 알고리즘2
# 입력: a, b
# 출력: a와 b의 최대공약수

def gcd2(a, b):
    if b == 0: # 종료 조건
        return a
    return gcd2(b, a % b) # 좀 더 작은 값으로 자기 자신을 호출

print(gcd2(3, 6))
print(gcd2(60, 24))