// 대문자로 통일

function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toLowerCase()) answer += s.toUpperCase();
    else answer += s;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
