function solution(str) {
    // 숫자면 배열에 담는데, 다음도 숫자면 같이 합쳐서 담는다.
    return str.split(/\D+/).reduce((acc, cur) => acc += cur*1, 0);
}
