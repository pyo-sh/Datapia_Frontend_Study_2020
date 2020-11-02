/*
6. 반복문과 console.log 함수를 사용해 아래의 별찍기를 완료해주세요
    *
   ***
  *****
 *******
*********
*/

let last = 5;
for(let i = 1; i <= last; i++){
    string = "";
    for(let x = 0; x < last - i; x++)
        string += " ";
    for(let x = 0; x < (2 * i) - 1; x++)
        string += "*";
    console.log(string);
};