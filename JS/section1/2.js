// 삼각형 만들 수 있는지 판별하기
// 삼각형에 맨 밑에 오는 막대의 길이(가장 긴 막대의 길이)보다 양옆에 막대의 길이(나머지 2개)를 더한 합이 커야 삼각형이 가능

function solution(a, b, c) {
  let answer='YES';
  let max; // 가장 긴 막대
  let sum=a+b+c; // 막대의 총합 (가장 긴 막대를 제외한 나머지 두 막대의 합을 구해야되는데 어떤 것이 가장 길지 알수 없기에 일단 다 더함)
 
  if(a > b) max = a;
  else max = b;

  if(c > max) max = c;

  if((sum - max) <= max) answer = 'NO';

  return answer;
}

console.log(solution(6, 7, 11));