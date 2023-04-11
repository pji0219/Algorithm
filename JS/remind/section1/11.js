// 특정 문자의 갯수
function solution(str, word) {
  let answer = 0;

  for (s of str) {
    if (s === word) answer++;
  }

  return answer;
}

const str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
