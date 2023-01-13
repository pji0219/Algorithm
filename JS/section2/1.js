// 큰 수 출력 하기
function solution(num) {
  const answer = [];

  answer.push(num[0]);

  for (let i = 1; i < num.length; i++) {
    if (num[i] > num[i - 1]) answer.push(num[i]);
  }

  return answer;
}

const num = [7, 3, 9, 5, 6, 12];
console.log(solution(num));
