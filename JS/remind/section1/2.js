// 삼각형 만들 수 있는지 판별하기
function solution(a, b, c) {
  let answer =  'yes';
  let max;
  const sum = a + b + c;

  if(a > b) max = a;
  else max = b;

  if(c > max) max = c;

  if(sum - max <= max) answer = 'no';

  return answer;
}

console.log(solution(6, 7, 11));