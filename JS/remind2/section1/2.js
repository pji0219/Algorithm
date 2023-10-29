// 삼각형 만들 수 있는지 판별하기
// *삼각형에 맨 밑에 오는 막대의 길이(가장 긴 막대의 길이)보다 양옆에 막대의 길이(나머지 2개)를 더한 합이 커야 삼각형이 가능*
function solution(a, b, c) {
  let answer = 'NO';
  let long;
  const sum = a + b + c; // 어떤 것이 가장 긴 막대인지 모르기에 일단 더함, 추후 가장 긴 막대와 뺄셈을 해서 양 옆의 막대의 길이 합이 큰지 판별 하기 위해

  if (a > b) long = a;
  else long = b;

  if (c > long) long = c;

  if (sum - long > long) answer = 'YES';
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
