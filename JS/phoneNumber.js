// 번호 가리기
function solution(phone_number) {
  let answer = '';

  // 전화번호의 길이만큼 for문을 돌려주면서
  for (let i = 0; i < phone_number.length; i++) {
    // 전화번호의 길이보다 4 적을 때 *를 answer변수에 더해주고 그렇지 않으면 기존 값을 answer변수에 더해줌
    i < phone_number.length - 4 ? (answer += '*') : (answer += phone_number[i]);
  }

  return answer;
}

const phone_number = '01012341234';

console.log(solution(phone_number)); // *******1234
