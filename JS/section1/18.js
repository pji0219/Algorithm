// 중복 문자 제거
function solution(str) {
  let answer;

  answer = str.filter((word, idx) => {
    return str.indexOf(word) === idx;
  });

  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
