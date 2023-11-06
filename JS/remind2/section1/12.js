// 대문자로 통일
// 풀이1
function solution(str) {
  let answer = '';
  for (let s of str) answer += s.toUpperCase();

  return answer;
}

console.log(solution('ItisTimeToStudy'));

// 풀이2
function solution2(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toLowerCase()) answer += s.toUpperCase();
    else answer += s;
  }

  return answer;
}

console.log(solution2('ItisTimeToStudy'));
