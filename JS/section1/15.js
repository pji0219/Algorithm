// 가장 긴 문자열
function solution(str) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let s of str) {
    if (s.length > max) {
      max = s.length;
      answer = s;
    }
  }
  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
