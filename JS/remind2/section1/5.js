// 최소값 구하기
function solution(numbers) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) min = numbers[i];
  }

  answer = min;
  return answer;
}

const numbers = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(numbers));

function solution1(numbers) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  numbers.forEach((number) => {
    if (min > number) min = number;
  });

  answer = min;
  return answer;
}

const numbers1 = [5, 3, 7, 11, 2, 15, 17];

console.log(solution1(numbers1));
