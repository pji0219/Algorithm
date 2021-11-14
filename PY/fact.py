# 팩토리얼을 구하는 알고리즘1 (재귀 호출 미사용)
#입력: n
#출력: 1부터 n까지 연속한 숫자를 곱한 값

def fact(n):
    f = 1 # 곱을 계산할 변수 초기값은 1
    for i in range(1, n + 1): # 1부터 n까지 반복(n + 1은 제외)
        f = f * i
    return f

print(fact(5))
print(fact(10))


# 팩토리얼 구하는 알고리즘2 (재귀 호출 사용)
# 입력: n
# 출력: 1부터 n까지 연속한 숫자를 곱한 값

def fact2(n):
    if n <= 1: # 1이하가 되면 종료(0포함)
        return 1
    return n * fact2(n - 1) # n!을 구하기 위해서 1 작은 값인 (n - 1)이 재귀호출 됨

print(fact2(5))
print(fact2(10))