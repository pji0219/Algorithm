// 문자 찾기
function solution(str, word) {
  let answer = 0;

  for (let s of str) {
    if (s === word) answer++;
  }

  return answer;
}

const str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
