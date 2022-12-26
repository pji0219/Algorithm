// 대문자 찾기
function solution(str) {
  let answer = 0;

  for (s of str) {
    if (s === s.toUpperCase()) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
