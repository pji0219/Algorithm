/*
  가위 바위 보
  A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
  B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
  가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 */

function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (
        (a[i] === 1 && b[j] === 3) ||
        (a[i] === 2 && b[j] === 1) ||
        (a[i] === 3 && b[j] === 2)
      ) {
        answer.push('A');
      } else {
        answer.push('B');
      }

      if (a[i] === b[i]) answer.push('D');
    }
  }

  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
