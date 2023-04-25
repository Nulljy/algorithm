// 문자열 다루기 기본

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// console.log(solution("dsfa3")); //	false

function solution(s) {
    let regex = /\d/g
    let regex2 = /[a-zA-Z]/g
    return s.length == 4 || s.length == 6 ? (regex.test(s) && !regex2.test(s) ? true : false) : false;
}

// 다른 방법
function solution(s){
    let regex = /^\d{6}$|^\d{4}$/;

    return regex.test(s);
}

