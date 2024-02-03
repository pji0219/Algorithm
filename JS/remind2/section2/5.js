// 등수 구하기

// 풀이1
function solution() {
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    let grade = 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) grade++;
    }

    answer += `${grade}, `;
  }

  return answer;
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 풀이2
function solution2(arr) {
  const length = arr.length;
  let answer = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution2(arr));
