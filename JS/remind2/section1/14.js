// 가장 긴 문자열 출력
// 풀이1
function solution(str) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;

  for (let s of str) {
    if (s.length > max) {
      max = s.length;
      answer = s;
    }
  }

  return answer;
}

const str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));

// 풀이2
function solution2(str) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;

  str.forEach((itm) => {
    if (itm.length > max) {
      max = itm.length;
      answer = itm;
    }
  });

  return answer;
}

console.log(solution2(str));
