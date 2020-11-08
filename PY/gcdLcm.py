# 두 정수를 입력 받아 최대공약수와 최소공배수 구하기

def gcd(n1, n2):
    
    i = min(n1,n2)

    if n1%i == 0 and n2%i == 0:
        return i

    i-=1

def lcm(n1, n2):

   return n1 * n2/gcd(n1,n2)


def solution(n1, n2):

    answer = []

    answer.insert(0, gcd(n1,n2))
    answer.insert(1, lcm(n1,n2))

    return answer

print(solution(3, 6))