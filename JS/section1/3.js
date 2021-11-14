// 연필 개수

function solution(n) {
  let answer;
  
  answer = Math.ceil(n / 12); // 소수점은 올림

  return answer;
}

console.log(solution(178));