// 유효한 팰린드롬
function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') !== str) return 'NO';
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
