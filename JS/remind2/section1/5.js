// 최소값 구하기

// 풀이1
function solution(numbers) {
  let answer;
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) min = numbers[i];
  }

  answer = min;
  return answer;
}

const numbers = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(numbers));

// 풀이2
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

// 풀이3
function solution2(numbers) {
  let answer = Math.min(...numbers);
  return answer;
}

const numbers2 = [5, 3, 7, 11, 2, 15, 17];

console.log(solution2(numbers2));
