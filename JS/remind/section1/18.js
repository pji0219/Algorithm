// 중복 문자 제거
function solution(str) {
  let answer;

  answer = str.filter((word, index) => {
    return str.indexOf(word) === index;
  });

  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
