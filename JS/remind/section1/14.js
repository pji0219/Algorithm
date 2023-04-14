// 대문자를 소문자로 소문자를 대문자로 변경
function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toUpperCase()) answer += s.toLowerCase();
    else answer += s.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
