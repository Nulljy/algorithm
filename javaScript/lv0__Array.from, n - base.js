console.log(solution(10));
//합성수 찾기
//약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
function app(v) {
    let cnt = 0;
    for(let i=1; i<=v; i++) {
        if(v % i === 0) cnt++;
    }
    return cnt >= 3 ? true : false;
}

function solution(n) {
    const arr = [];
    for(let i=1; i<=n; i++) arr.push(i);
    const result = arr.filter(v => app(v));
    return result.length;
}

// 다른 풀이법
function solution(n) {
    let base = Array.from(Array(n), (v,i) => i+1) //  Array.from(Array(n) 뜻은 Array[n만큼의 배열 생성], 콜백 => 인덱스 + 1을 넣는다.) n이 10일 때 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) { // 10이라면 제곱근인 3이 들어간다. 
        base = base.filter(el => el%i != 0 || el <= i) // 1 ~ 10을 2와 3으로 나누었을때 나머지가 0이 아닐경우 또는 1~10이 i보다 작거나 같을때 base에 들어간다.
        console.log(base);
    }
    return n - base.length; // n에서 base를 빼고 남은 것들이 합성수
}

// 왜 제곱근을 구해서 했을까? 제곱근 이상의 수는 공배수일 가능성이 존재
// 합성수 => 1, base의 el, 대상인 정수  
