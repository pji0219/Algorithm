# 수학 모듈 사용
import math

# 절대값 알고리즘1 (부호판단)
def abs_sign(a):
    if a >= 0:
        return a
    else:
        return -a


print(abs_sign(5))
print(abs_sign(-3))



# 절대값 알고리즘 2 (제곱 후 제곱근)
def abs_square(a):
    b = a*a
    return math.sqrt(b)


print(abs_square(5))
print(abs_square(-3))
