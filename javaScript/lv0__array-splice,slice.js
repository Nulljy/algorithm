console.log(solution("abc1Addfggg4556b"	, 6)); // ["abc1Ad", "dfggg4", "556b"]
// 잘라서 배열로 저장하기



// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(str, n) {
    let tmp = [...str];
    let result = [];
    let length = str.length % n === 0 ? str.length / n : Math.floor(str.length / n) + 1;
    for(let i=0; i<length; i++) {
        let a = tmp.splice(0, n).join('');
        result.push(a)
    }
    return result;
}

// 정규표현식
function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

// 다른 방법
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
    return res;
}
