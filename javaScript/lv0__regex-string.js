// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(str) {
    let tmp = str.split('');
    let result = tmp.map(v => {
        if(v === v.toLowerCase()) {
            return v.toUpperCase();
        }else {
            return v.toLowerCase();
        }
    })
    return result.join('');
}

//리젝스를 써야하는데 arr[0] = true, arr[1] = false가 나와서 다르게 풀었다. 
// function solution(str) {
    let regex1 = /[a-z]+/g;
    let tmp = str.split('');
    let result = tmp.map(v => {
        if(regex1.test(v)) {
            return true;
        }else {
            return false;
        }
    })
    return result;
}
// 리젝스 틀린 
