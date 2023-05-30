

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