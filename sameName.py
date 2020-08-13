name = ['Lee', 'Park', 'Kim', 'Lee']

def FindSameName(name):
    n = len(name) # 리스트의 자료 개수를 n에 저장
    result = set() # 결과를 저장할 빈 집합
    for i in range(0, n - 1): # 0부터 -2까지 반복
        for j in range(i + 1, n): #i+1부터 -1까지 반복
            if name[i] == name[j]: # 이름이 같으면
                result.add(name[i]) # 찾은 이름 result에 추가
    return result

print(FindSameName(name))
