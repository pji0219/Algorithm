// 문자 찾기
// 풀이1
function solution(str, word) {
  let answer = 0;

  for (let s of str) {
    if (s === word) answer++;
  }
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));

// 풀이2
function solution2(str, word) {
  let answer = 0;
  const arr = [...str];

  arr.forEach((s) => {
    if (s === word) answer++;
  });
  return answer;
}

console.log(solution2('COMPUTERPROGRAMMING', 'R'));
