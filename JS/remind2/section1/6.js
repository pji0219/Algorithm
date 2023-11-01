// 홀수의 합을 구하고 홀수중 최소값을 구하라.

// 풀이1
function solution(numbers) {
  let answer = [];
  let oddSum = 0;
  let min = 100;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddSum += numbers[i];
      if (min > numbers[i]) min = numbers[i];
    }
  }

  answer.push({
    oddSum,
    min,
  });
  return answer;
}

const numbers = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(numbers));

// 풀이2
function solution2(numbers) {
  let answer = [];
  let sum = 0;
  let min = 100;

  const odd = numbers.filter((number) => number % 2 !== 0);
  sum = odd.reduce((acc, crr) => acc + crr, 0);
  odd.forEach((number) => {
    if (min > number) min = number;
  });

  answer.push({
    sum,
    min,
  });
  return answer;
}

console.log(solution2(numbers));
