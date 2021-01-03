function solution(n) {
   let answer = '';
    for(i = 0; i<n; i++) {
       answer+= (i%2 === 0) ? '수' : '박';
    }

    return answer;
} 

console.log(solution(100000));