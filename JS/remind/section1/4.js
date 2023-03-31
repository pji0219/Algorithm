// 1부터 n까지의 합 구하기
function solution(num) {
  let answer = 0;

  for (i = 1; i <= num; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(6));
