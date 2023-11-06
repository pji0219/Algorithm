// 대문자 찾기
function solution(str) {
  let answer = 0;
  for (let s of str) {
    if (s === s.toUpperCase()) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood'));
