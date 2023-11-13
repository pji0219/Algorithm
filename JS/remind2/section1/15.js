// 가운데 문자 출력
function solution(str) {
  let answer = '';
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substring(mid, mid + 1);
  else if (str.length % 2 === 0) answer = str.substring(mid - 1, mid + 1);

  return answer;
}

const str = 'good';
console.log(solution(str));
