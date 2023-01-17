// 등수 구하기
function solution(score) {
  let n = score.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (score[j] > score[i]) answer[i]++;
    }
  }
  return answer;
}

let score = [87, 89, 92, 100, 76];
console.log(solution(score));
