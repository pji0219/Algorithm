// 회문 문자열
function solution(str) {
  let answer = 'YES';
  const s = str.toLowerCase();
  const length = str.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - i - 1]) return 'NO';
  }

  return answer;
}

const str = 'gooG';
console.log(solution(str));
