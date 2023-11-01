// 차량 10부제
function solution(carNumbers, day) {
  let answer = 0;
  for (let i = 0; i < carNumbers.length; i++) {
    if (carNumbers[i] % 10 === day) answer++;
  }
  return answer;
}

const day = 3;
const carNumbers = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(carNumbers, day));

function solution2(carNumbers, day) {
  let answer = 0;
  carNumbers.forEach((number) => {
    if (number % 10 === day) answer++;
  });
  return answer;
}

console.log(solution2(carNumbers, day));
