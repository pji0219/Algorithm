# 딕셔너리를 이용해 동명이인을 찾는 알고리즘
# 입력: 이름이 n개 들어 있는 리스트
# 출력: n개의 이름 중 반복되는 이름의 집합

def find_same_name(a):
    # 1단계: 각 이름이 등장한 횟수를 딕셔너리로 만듦
    name_dict = {}
    for name in a: # 리스트 a에 있는 자료들을 차례로 반복
        if name in name_dict: # 이름이 name_dict에 있으면
            name_dict[name] += 1 # 등장 횟수를 1증가
        else: # 새 이름이면
            name_dict[name] = 1 # 등장 횟수를 1로 저장
    #  2단계: 만들어진 딕셔너리에서 등장 횟수가 2이상인 것을 결과에 추가
    result = set() # 결과값을 저장할 빈 집합
    for name in name_dict: # 딕셔너리 name_dict에 있는 자료들을 차례로 반복
        if name_dict[name] >= 2:
            result.add(name)
    
    return result

name = ['Tom', 'jerry', 'mike', 'Tom', 'jerry', 'smise', 'park', 'kim']

print(find_same_name(name))