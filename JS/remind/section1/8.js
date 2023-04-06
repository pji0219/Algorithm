// 10부제, 날짜의 일의 자리와 차량 번호의 일의 자리가 일치시 운행 금지
function solution(day, arr) {
  let answer = 0;

  for (i of arr) {
    if (i % 10 === day) answer++;
  }

  return answer;
}

const day = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(day, arr));
