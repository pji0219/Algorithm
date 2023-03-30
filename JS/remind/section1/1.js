// 3개의 숫자 중 최소값 구하기
function solution(num1, num2, num3) {
  let answer;

  if (num1 < num2) answer = num1;
  else answer = num2;

  if (num3 < answer) answer = num3;

  return answer;
}

console.log(solution(5, 6, 11));
