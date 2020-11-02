/*
4.  아래에 메뉴판을 나타내는 배열이 있습니다.
[   { price: 3000, name: "카페라떼" },
    { price: 3500, name: "바닐라라떼" },
    { price: 1500, name: "아메리카노" },
    { price: 3800, name: "돌체라떼" },
    { price: 4200, name: "두유소이라떼" }]

이 배열을 매개변수로 받아 각 price를 (배열의 index) * 100 으로 뺀 새로운 메뉴판을 출력하는 함수를 만드시오.
(함수 호출 뒤에도 '매개변수로 받은 배열'안에 객체들의 price 값은 그대로여야 합니다.)
*/

let array = [{ price: 3000, name: "카페라떼" },
    { price: 3500, name: "바닐라라떼" },
    { price: 1500, name: "아메리카노" },
    { price: 3800, name: "돌체라떼" },
    { price: 4200, name: "두유소이라떼" }];

const discount = (arr) => {
    return arr.map( (value, i) => {
        return {
            ... value,
            price: value['price'] - (100 * i)
        }
    });
}

console.log("출력 배열", discount(array));
console.log("기존 배열 ", array);