// A를 #으로 바꾸기
function solution(str) {
  let answer = '';

  for (itm of str) {
    if (itm === 'A') answer += '#';
    else answer += itm;
  }

  return answer;
}

let str = 'BANANA';
console.log(solution(str));
