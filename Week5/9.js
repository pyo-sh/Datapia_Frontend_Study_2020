/*
9. 년도,월, 일, 시간으로 이루어진 문자열 '2020-10-29T18:00:00' 이 있다.
이 중 월을 출력하라.
(반드시 split 사용)
*/

let string = '2020-10-29T18:00:00';
let result = string.split("-")[1].toString();
console.log(result)