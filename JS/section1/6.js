// Math 내장함수로  최소값, 최대값 구하기

// 최소값
function minSolution(arr) {
  let answer = Math.min(...arr);

  return answer;
}

const arr1 = [5, 7, 1, 3, 2, 10, 11];
console.log(minSolution(arr1));

// 최대값
function maxSolution(arr) {
  let answer = Math.max(...arr);

  return answer;
}

const arr2 = [5, 7, 1, 3, 2, 9, 11];
console.log(maxSolution(arr2));
