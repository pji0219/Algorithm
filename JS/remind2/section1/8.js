// 일곱난쟁이, 일곱난쟁이 키의 합이 100이라는 단서로 9명중 진짜 일곱난쟁이를 구하라
function solution(arr) {
  let answer;
  const sum = arr.reduce((arr, crr) => arr + crr, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);
        arr.splice(j, 1);
      }
    }
  }
  answer = arr;
  return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
