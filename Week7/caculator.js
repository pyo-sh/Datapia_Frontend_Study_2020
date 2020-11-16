const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".Modal-Wrapper");

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};

/* 계산가 연산 관련 ------------------------------------------ */
// 숫자와 연산자를 받아 연산하여 값을 반환하는 함수
const caculateSimple = (operation1, operator, operation2) => {
  let result;
  switch(operator){
    case '*':
      result = operation1 * operation2;
      break;
    case '%':
      result = operation1 / operation2;
      break;
    case '+':
      result = operation1 + operation2;
      break;
    case '-':
      result = operation1 - operation2;
      break;
    default:
      result = 0;
  }
  return result;
};

// string을 받아 연산을 수행하는 함수
const caculateString = (string) => {
  // 곱셈, 나눗셈을 수행할 배열
  let array_first_caculate = string.split(" ");
  // 연산은 배열의 index가 3이상, 홀수여야 한다
  if(array_first_caculate.length < 3 || array_first_caculate.length % 2 == 0)
    return '';

  // 나만의 reduce 규칙 accumulator = [연산을 위한 배열, 인덱스, 연산을 수행 할 지 여부]
  let firstResult = array_first_caculate.reduce((accumulator, current) => {
    // 연산이 정상이 아니라면 빈 상태로 반납
    if(!accumulator)
      return accumulator;

    // 연산을 해야 하는 상태면
    if(accumulator[2]){
      let operator = accumulator[0].pop()
      let operation1 = Number(accumulator[0].pop());
      let operation2 = Number(current);

      // 정상적인 연산이 아니라면 빈 상태로 반납
      if (!operation1 || !operation2)
        return false;
      
      let result = caculateSimple(operation1, operator, operation2);
      accumulator[0].push(result);
      accumulator[2] = false;
    }
    // 나누기와 곱셈이 아닐 경우
    else{
      accumulator[0].push(current);
      // 곱셈과 나눗셈이라면 다음은 연산
      if(current == '*' || current == '%'){
        accumulator[2] = true;
      }
    }
    // 인덱스 확인
    accumulator[1] += 1;
    return accumulator;
  }, [[], 0, false]);
  // 첫 연산이 비성공적이라면
  if(!firstResult)
    return '';

  // 덧셈, 뺄셈을 수행할 배열
  let array_second_caculate = firstResult[0];

  let secondResult = array_second_caculate.reduce((accumulator, current) => {
    // 연산이 정상이 아니라면 빈 상태로 반납
    if(!accumulator)
      return accumulator;

    // 연산을 해야 하는 상태면
    if(accumulator[2]){
      let operator = accumulator[0].pop()
      let operation1 = Number(accumulator[0].pop());
      let operation2 = Number(current);

      // 정상적인 연산이 아니라면 빈 상태로 반납
      if (!operation1 || !operation2)
        return false;

      let result = caculateSimple(operation1, operator, operation2);
      accumulator[0].push(result);
      accumulator[2] = false;
    }
    // 나누기와 곱셈이 아닐 경우
    else{
      accumulator[0].push(current);
      // 곱셈과 나눗셈이라면 다음은 연산
      if(current == '+' || current == '-'){
        accumulator[2] = true;
      }
    }
    // 인덱스 확인
    accumulator[1] += 1;
    return accumulator;
  }, [[], 0, false]);
  // 두번 번째 연산이 비정상이라면
  if(!secondResult)
    return '';

  return secondResult[0][0];
}

/* input 관련 ------------------------------------------ */
// 연산을 보여주는 input 가져오기
const input = document.querySelector(".Instruction");

/* 아쉬워서 그냥 추가해봤습니다. ----------------------------- */
// 정규식을 이용해 input에 키보드로 값을 입력받게 하기 (구현 안 하려면 input을 쓰지 못하게 하면 되긴함)
// 문자열에서 숫자와 연산, 공백만 들어가게 하기
const replaceString = (string) => {
  // 마지막이 연산자일 경우를 위한 비교
  lastWord = string[string.length - 1]
  blank = /[*%+-]/;
  if (blank.test(lastWord)){
    // 지우는 것일 경우
    if(string.length > 1 && !string[string.length - 2].trim()){
      // 연산을 두번 쳤을 때
      if(string.length > 3 && blank.test(string[string.length - 3]))
        string = string.slice(0, string.length - 1);
      // 지우는 것일 때
      else
        string = string.slice(0, string.length - 2);
    }
    // 추가한 것일 경우
    else{
      string = string.slice(0, string.length - 1) + " " + lastWord + " ";
    }
  }
  // 숫자, 공백, 연산 빼고 다 거르기
  return string.replace(/[^\d*%+-\s]/g, '');
};
// input에 쓸 때 연산 값만 쓰게하기
input.addEventListener('input', (e)=>{
  e.target.value = replaceString(e.target.value);
});

/* button 관련 ----------------------------------------- */
// 결과를 저장해야 하는 Div
const modalResult = document.querySelector(".Modal-Result");
// 버튼의 list를 가지고 있는 녀석들을 가져오기
const buttonDiv = document.querySelector("#Main-Buttons").children;

// 버튼 클릭 시 해당 Text 를 String에 추가하는 것
const putString = (e) => {
  input.value += e.target.textContent;
};

// 각 list에게 역할 부여하기 / HTMLCollection을 배열 안에 Spread 하여 접근
[...buttonDiv].reduce((accumulator, current) => {
  // Enter 버튼에 대해서 연산을 수행하는 함수를 넣어준다.
  if(accumulator == (buttonDiv.length - 1)){
    current.children[0].addEventListener('click', (e) => {
      // 연산 하기
      result = caculateString(input.value);
      
      // 결과 값이 있으면 history 저장
      if(result){
        let history = input.value + "</br>  =  " + result;
        modalResult.innerHTML += `<div class=\"Modal-Result-Child\">${history}</div><hr/>`
      }
      
      input.value = result;
    });
    current.children[1].addEventListener('click', (e) => {
      input.value = input.value.slice(0, -1);
    });
  }
  else{
    // list 안의 button에 접근 후 함수 부여
    [...current.children].map(button => {
      button.addEventListener('click', putString);
    });
  }
  return accumulator + 1;
}, 0);