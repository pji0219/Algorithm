// 두 정수의 최대공약수, 최소공배수 구하기

function soluction(num1, num2) {
    let answer = [];

    function gcd(num1, num2) {

        let num = num1 > num2 ? num1 : num2;
        let maxNum;

        for (let i = 1; i <= num; i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                maxNum = i;
            }
        }

        return maxNum;
    }

    function lcm(num1, num2) {
        return num1 * num2 / gcd(num1, num2);
    }

    answer.push(gcd(num1, num2));
    answer.push(lcm(num1, num2));

    return answer;
}

console.log(soluction(1, 6));