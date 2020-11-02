/*
3. Array.prototype.reduce 메소드를 사용하면 Array.prototype의 
map, filter, some, every 등의 메소드를 구현할 수 있다.
한번 최대한 구현해보자.
*/

array = [1, 2, 3, 4, 5, 6]

// map (3보다 작을 땐 false, 이상일 땐 true를 만들기)
let map = array.reduce( (accumulator, current) => {
    current < 3 ?   accumulator.push(false)   :   accumulator.push(true);
    return accumulator;
}, []);

console.log(map);


// filter (4 이상인 값만 있는 새로운 배열 만들기)
let filter = array.reduce( (accumulator, current) => {
    if(current >= 4)    accumulator.push(current);
    return accumulator;
}, []);

console.log(filter);


// some (짝수가 있는지 확인)
let some = array.reduce((accumulator, current) => {
    if(current % 2 == 0)
        return true || accumulator;
    return false;
}, false);

console.log(some);


// every (모든 요소가 10보다 작은 값은지 확인)
let every = array.reduce((accumulator, current) => {
    if(current < 10)
        return true && accumulator;
    return false;
}, true);

console.log(every);