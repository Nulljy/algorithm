## 스택
택배 상하차를 떠올리면 된다. 
스택은 마지막에 들어온 것이 먼저 나간다.

반대로 큐는 은행 창구와 같다. 번호표를 먼저 뽑은 사람이 먼저다.

# 자바스크립트에서의 스택 구현
```JavaScript
class Stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        return this.arr.push(element);
    }

    pop(element) {
        return this.arr.pop();
    }

    pick() {
        return this.arr[this.arr.length-1];
    }
}

const s = new Stack();

s.push(5);
s.push(7);
s.push(8);
s.push(9);

console.log(s);
console.log(s.pop());
console.log(s);
console.log(s.pick());
console.log(s);
```