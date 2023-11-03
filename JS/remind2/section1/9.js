// A를 #으로
// 풀이1
function solution(str) {
  let answer = '';

  for (let s of str) {
    if (s === 'A') answer += '#';
    else answer += s;
  }
  return answer;
}

console.log(solution('BANANA'));

// 풀이2
function solution2(str) {
  let answer = '';
  const arr = [...str];

  arr.forEach((s) => {
    if (s === 'A') answer += '#';
    else answer += s;
  });
  return answer;
}

console.log(solution2('BANANA'));
