/*
7. [ {name: '최정은', age: 23, grade: 4},
{name: '표석훈', age: 24, grade: 3},
{name: '문건우', age: 26, grade: 4},
{name: '손민호', age: 24, grade: 3},
{name: '황서영', age: 21, grade: 2}]
라는 배열에서 4학년이 아닌 학생들을 추출하고 이들의 나이와 학년만을 가지는 배열로 만들어라.
(반드시 filter, reduce를 이용해서 평균 나이를 구하시오.)
*/

let datapia = [{name: '최정은', age: 23, grade: 4},
    {name: '표석훈', age: 24, grade: 3},
    {name: '문건우', age: 26, grade: 4},
    {name: '손민호', age: 24, grade: 3},
    {name: '황서영', age: 21, grade: 2}];

let array = datapia.filter( value => {
    return value['grade'] != 4;
});

let avgAge = datapia.reduce((accumulator, current) => { return (accumulator + current['age']);}, 0) / datapia.length;

console.log(array);
console.log(avgAge);