function gcd(a, b) {
    let maxNum = 0;

    const Num = (a>b) ? a : b;

    for(i = 1; i<=Num; i++) {
        if(a%i === 0 && b%i === 0) {
            maxNum= i;
        }
    }

    return maxNum;
}

function lcd(a, b) {
    return a * b / gcd(a, b);
}

function solution(a, b) {
    let answer = [];

    answer.push(gcd(a, b));
    answer.push(lcd(a, b));

    return answer;
}

console.log(solution(3, 12));