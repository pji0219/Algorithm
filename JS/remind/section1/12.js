// 대문자 갯수
function solution(str) {
  let answer = 0;

  for (s of str) {
    if (s === s.toUpperCase()) answer++;
  }

  return answer;
}

const str = 'KoreaTimeGood';
console.log(solution(str));
