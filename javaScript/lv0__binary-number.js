console.log(solution("10", "11"));
console.log(solution("1001", "1111"));
console.log(solution("100001", "1010101")); // 1010110
// 이진수 더하기
//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
function solution(bin1, bin2) {
    let tmp = Number(bin1) + Number(bin2);
    tmp = tmp.toString().split('').reverse();
    let length = tmp.length;
    let result = [];
    let flag = 0;
    for(let i=0; i<length; i++) {
        let tmp2 = Number(tmp[i]);
        tmp2 += flag;
        flag = 0;
        if(tmp2 == 3) {
            flag = 1;
            result.push(1);
        } else if(tmp2 == 2) {
            flag = 1;
            result.push(0);
        } else {
            result.push(tmp2);
        }
    }
    if(flag == 1) {
        result.push(1);
    }
    return result.reverse().join('');
}

// 어디가 더 클지 모를때는 아예 더하고 시작하는게 나을 수도있다.
