// 연필 개수

function solution(n) {
  let answer;

  answer = Math.ceil(n / 12); // 나머지는 올림

  return answer;
}

console.log(solution(178));
