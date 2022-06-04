// 10부제, 날짜의 일의 자리와 차량 번호의 일의 자리가 일치시 운행 금지
function solution(day, arr) {
  let answer = 0;
  for (i of arr) {
    // 어떤 수를 10으로 나누었을 때 몫은 일의 자리가 나옴 그것으로 날짜와 같은지 판단
    if (i % 10 === day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
