// 대소문자 변환
function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toUpperCase()) answer += s.toLowerCase();
    else answer += s.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
