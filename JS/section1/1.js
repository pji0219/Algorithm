// 세 수 중 최소값 구하기

function solution(a, b, c) {
  let anwser;

  if (a < b) anwser = a;
  else anwser = b;

  if (c < anwser) anwser = c;

  return anwser;
}

console.log(solution(5, 6, 11));
