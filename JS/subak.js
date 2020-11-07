// 수박수박수?

// 풀이1

function solution(n) {
    let answer = '';

    for(i = 1; i<=n; i++) {
       if(i%2 === 0) {
           answer+= '박';
       } else {
           answer+= '수';
       }
    };

    return answer;
}

console.log(solution(5));


// 풀이2

function solution2(n) {
    let answer = '';

    for(i = 1; i<=n; i++) {
        answer += i%2 === 0 ? '박':'수';
    }

    return answer;
}

console.log(solution2(5));