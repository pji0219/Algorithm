# 최대값 찾기 알고리즘

def find_max(a):
    n = len(a) # 파라미터로 받은 리스트의 길이
    max_v = a[0] # 초기에 리스트의 첫번쨰 값을 최대값으로 기억
    for i in range(1, n): # 1부터 리스트 마지막 까지 반복
        if a[i] > max_v: # 이번 루프의 값이 현재까지 기억된 최대값보다 크면 
            max_v = a[i] # 최대값을 변경
    return max_v

v = [17, 92, 18, 33, 58, 7, 33, 42]

print(find_max(v))
