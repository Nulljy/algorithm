// 외계어 사전

// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])) // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])) // 1

function app(spell, str) {
    let check = [];
    for(let i=0; i < spell.length; i++) {
        if(!str.includes(spell[i])) {
            check.push(i);
        }
    }
    return check.length === 0 ? 1 : 2;
}

function solution(spell, dic) {
    const result = dic.map(v => {
        return app(spell, v);
    })
    return result.includes(1) ? 1 : 2;
}

// 다른 방식
function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2; // spell와 dice를 sort로 정렬해서 dic에 같은 문자가 있는지 체크
}
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//Array.prototype.some()

//const array = [1, 2, 3, 4, 5]
// Checks whether an element is even
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
// Expected output: true
