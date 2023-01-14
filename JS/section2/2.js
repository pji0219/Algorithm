// 보이는 학생
function solution(student) {
  let answer = 1,
    max = student[0];
  for (let i = 1; i < student.length; i++) {
    if (student[i] > max) {
      answer++;
      max = student[i];
    }
  }
  return answer;
}

let student = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(student));
