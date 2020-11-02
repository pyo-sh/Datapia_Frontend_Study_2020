/*
5. 매개변수로 a, b를 받고, a, b 가
a = [true, false, true, false], b = [false, false, false, false]일 때
각 인덱스에 맞는 연산 (0: &&, 1: ||, 2: !( && ), 3: ^(XOR))을 하고
ex ) a[0] && b[0]
[{ index : 0, result: (true or false) }, ... ] 형식을 가진 배열을 반환하는 함수를 만들기
*/

let firstVar = [true, false, true, false];
let secondVar = [false, false, false, false];

const makeValue = (i, a, b) => {
    switch(i){
        case 0:
            return a && b;
        case 1:
            return a || b;
        case 2:
            return !(a && b);
        case 3:
            return a ^ b ? true : false;
    };
}

const caculate = (a, b) => {
    return a.map( (value, i) => {
        return {
            index: i,
            result: makeValue(i, value, b[i])
        }
    });
}

console.log(caculate(firstVar, secondVar));