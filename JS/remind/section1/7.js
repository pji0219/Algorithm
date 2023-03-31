// 7개의 수중 홀수들을 골라 합을 구하고 고른 홀수들중 최소값을 구하라.
function solution(arr) {
  let answer = [];
  let min = 100;
  let oddNum;
  let sum;

  oddNum = arr.filter((num) => num % 2 !== 0);
  sum = oddNum.reduce((arr, crr) => arr + crr, 0);
  answer.push(sum);

  oddNum.forEach((num) => {
    if (num < min) min = num;
  });
  answer.push(min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
