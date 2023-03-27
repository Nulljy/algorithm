console.log(solution(2, 10));

// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
function solution(n, t, cnt=0) {
    return cnt == t ? n : solution(n*2, t, ++cnt);
}

// 시프트 연산자

function solution(n, t) {
  return n << t;
}
