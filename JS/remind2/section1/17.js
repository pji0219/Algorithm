// 중복 단어 제거
function solution(words) {
  let answer;
  answer = words.filter((word, idx) => words.indexOf(word) === idx);
  return answer;
}

const words = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(words));
