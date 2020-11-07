// 두개의 정수중 가장 작은 수와 가장 큰 수 까지의 합

// 알고리즘1

function solution1(n1, n2) {
    let answer = 0;

    for(i = Math.min(n1,n2); i<=Math.max(n1,n2); i++) {
        answer+= i;
    }

    return answer;
}

console.log(solution1(1,3));


//  알고리즘2

function solution2(n1, n2) {
    let answer = 0;
    
    if (n1>n2) {
        for(i = n2; i<=n1; i ++) {
            answer+= i;
        }

    } else {
        for(i = n1; i<=n2; i ++) {
            answer+= i;
        }
    }

    return answer;

}

console.log(solution2(1,3));