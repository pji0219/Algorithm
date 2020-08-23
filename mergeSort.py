# 병합 정렬
# 입력: 리스트 a
# 출력: 없음 (입력으로 주어진 a가 정렬 됨)

def merge_sort(a):
    n = len(a)
    # 종료 조건: 정렬할 리스트의 자료 개수가 한개 이하이면 정렬할 필요가 없음
    if n <= 1:
        return
    # 그룹을 나누어 각각 병합 정렬을 호출하는 과정
    mid = n // 2 # 중간을 기준으로 두 그룹으로 나눔

    g1 = a[:mid] # 첫번째 그룹: 0부터 중간 직전까지
    g2 = a[mid:] # 두번째 그룹: 중간부터 끝까지
    
    merge_sort(g1) # 재귀 호출로 첫번째 그룹을 정렬
    merge_sort(g2) # 재귀 호출로 두번째 그룹을 정렬

    i1 = 0
    i2 = 0

    ia = 0
    while i1 < len(g1) and i2 < len(g2):
        if g1[i1] < g2[i2]:
            a[ia] = g1[i1]
            i1 += 1
            ia += 1
        else:
            a[ia] = g2[i2]
            i2 += 1
            ia += 1
    # 아직 남아 있는 자료들을 결과에 추가
    while i1 < len(g1):
        a[ia] = g1[i1]
        i1 += 1
        ia += 1
    while i2 < len(g2):
        a[ia] = g2[i2]
        i2 += 1
        ia += 1

l =  [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]

merge_sort(l)

print(l)