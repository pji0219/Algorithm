// 연필 개수
function solution(students) {
  let answer;
  answer = Math.ceil(students / 12);
  return answer;
}

console.log(solution(25));
console.log(solution(178));
