# 1부터 n까지 연속한 숫자의 합을 구하는 알고리즘 1

def sum_n(n):
    s = 0 # 합을 계산할 변수
    for i in range(1, n + 1): # 1부터 n까지 반복 (n + 1은 제외)
        s = s + i # 연속한 숫자 덧셈
    return s

print(sum_n(10)) # 1부터 10까지의 합
print(sum_n(100))# 1부터 100까지의 합


# 1부터 n까지 연속한 숫자의 합을 구하는 알고리즘 2

def sum_n2(n):
    return n * (n + 1) / 2

print(sum_n(10)) # 1부터 10까지의 합
print(sum_n(100))# 1부터 100까지의 합
