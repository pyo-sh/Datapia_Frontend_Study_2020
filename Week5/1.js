// 1. [1, 2, 3, 4, 5, 6, 7]  중에서 배열 메소드를 사용하여 4 이상인 값만 있는 새로운 배열 만들기.

let array = [1, 2, 3, 4, 5, 6];

//result = array.filter(function(value){ return value >= 4; });
let result = array.filter( _ => { return _ >= 4; })

console.log(result)
