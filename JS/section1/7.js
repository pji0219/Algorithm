// 7개의 수중 홀수들을 골라 합을 구하고 고른 홀수들중 최소값을 구하라.

// me
function solution(arr) {
  let answer = [];
  let oddNum;
  let sum;
  let min = 100;

  // 홀수 구하고
  oddNum = arr.filter((num) => num % 2 !== 0);
  // 구한 홀수를 합함
  sum = oddNum.reduce((acc, crr) => acc + crr, 0);
  answer.push(sum);

  // 구한 홀수들중 최소값을 구함
  oddNum.forEach((num) => {
    if (num < min) min = num;
  });
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 2
function solution2(arr) {
  let answer = [];
  let sum = 0,
    min = 100;
  for (let i of arr) {
    // 홀수이면
    if (i % 2 !== 0) {
      // 홀수의 합을 구하고
      sum += i;
      // 홀수중 최소값을 구함
      if (i < min) min = i;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr2 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution2(arr2));
