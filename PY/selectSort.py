# 선택 정렬 알고리즘
# 입력: 리스트 a
# 출력: 없음(입력으로 주어진 a가 정렬됨)

def select_sort(a):
    n = len(a)
    for i in range(0, n - 1): # 0부터 마지막에서 두번째(-2)까지 반복
        # i번 위치부터 끝까지 자료 값 중 최소값의 위치를 찾음
        min_idx = i
        for j in range(i + 1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i] # 리스트 안에서  두 자료의 값을 바꾸기 위해 사용
        # 파이썬에서는 값을 서로 바꾸는데 쉼표를 사용해서 x , y = y, x 이렇게 바꾸기 가능

l = [2, 4, 5, 1, 3]
select_sort(l)
print(l)
