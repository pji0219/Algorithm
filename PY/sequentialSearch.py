# 순차 탐색 알고리즘
# 리스트에서 특정 숫자의 위치 찾기
# 입력: 리스트 l, 찾는 값 x
# 출력: 찾으면 그 값의 위치, 찾지 못하면 -1

def search(l, x):
    n = len(l) # 입력 크기 n
    for i in range(0, n): # 리스트 l의 모든 값을 차례로
        if x == l[i]: # x값과 비교하여
            return i # 같으면 위치를 돌려준다.
    return -1

l = [17, 92, 18, 33, 58, 7, 33, 42]

# 리스트 위치번호로 찾아짐 (0부터 시작)
print(search(l, 7))
print(search(l, 92))
print(search(l, 100))    