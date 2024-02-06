// 격자판 최대합
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1,
    sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1, (sum2 = 0);
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1, (sum2 = 0);
}
