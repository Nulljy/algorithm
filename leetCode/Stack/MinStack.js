/**155. Min Stack

 * https://leetcode.com/problems/min-stack/
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

MinStack class 구현:

MinStack() 스택 객체를 초기화한다.
void push(int val) 변수 val을 stack에 추가한다.
void pop() 스택 맨위에 있는 element 제거.
int top() stack의 맨 위에 있는 요소를 리턴.
int getMin() 스택 안의 가장 작은 element를 리턴.
각 함수는 O(1)의 복잡도로 구현해야 한다.

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Minstack 초기화 => null
push null 리턴
getMin => -3 리턴
pop => 맨위 제거 후 null 리턴
top => -3이 제거 되었으므로 0을 리턴
getMin => -2 리턴

Output
[null,null,null,null,-3,null,0,-2]

제약:

-231 <= val <= 231 - 1
함수 pop, top, getMin은 항상 비어있지 않은 스택에서만 불러올수있다.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 * 
 */

var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push({
        value: val,
        min: this.arr.length === 0 ? val : Math.min(val, this.getMin()),
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.arr[this.arr.length-1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Map Object 이용하기 runtime 
// Runtime 65ms