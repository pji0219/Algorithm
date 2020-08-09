# 1부터 n까지 연속한 수의 제곱의 합을 구하는 알고리즘 1
def sum_n2(n):
    s = 0 # 합의 제곱을 계산할 변수
    for i in range(1, n+1): # 1부터 n번째까지 반복(n+1은 제외)
        s = s + i * i
    return s

print(sum_n2(10))
print(sum_n2(100))


# 1부터 n까지 연속한 수의 제곱의 합을 구하는 알고리즘 2
def sum_n2_1(n):
    return n * (n + 1) * (2 * n + 1) / 6

print(sum_n2_1(10))
print(sum_n2_1(100))