// 유효한 팰린드롬
function solution(str) {
  let answer = 'YES';
  // /[^a-z]/g : 글로벌 중에 a부터 z가 아닌 것을 찾아라
  const s = str.toLowerCase().replace(/[^a-z]/g, '');
  console.log(s);
  console.log(s.split('').reverse().join(''));
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
