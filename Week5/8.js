/*
8. 위 배열에서 이름이 문건우인 배열의 index를 찾고 이를 잘라낸 새로운 배열을 생성하시오.
(단, 원본 배열을 변경하지 마시오.)
*/

let datapia = [{name: '최정은', age: 23, grade: 4},
    {name: '표석훈', age: 24, grade: 3},
    {name: '문건우', age: 26, grade: 4},
    {name: '손민호', age: 24, grade: 3},
    {name: '황서영', age: 21, grade: 2}];


let result;
let array = datapia.filter( (value, i) => {
    if(value['name'] == '문건우'){
        result = value
        return false;
    }
    else
        return true;
});

console.log(result);
console.log(datapia);
console.log(array);