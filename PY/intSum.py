# 두 정수를 입력 받아 그 사이의 수 합 구하기

def solution(a, b):

    answer = 0

    for i in range(a, b+1):
        answer+= i
    
    return answer

print(solution(1, 3))
