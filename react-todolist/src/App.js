import React, { useState } from "../node_modules/react";

import ToDoInput from "./Component/ToDoInput";
import ToDoList from "./Component/ToDoList";

import './Style/App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [nowDate] = useState(new Date());

  const renderDate = () => {
    if(nowDate){
      const dayToKorean = ['월', '화', '수', '목', '금', '토', '일'];
      const year = nowDate.getFullYear();
      const month = String(Number(nowDate.getMonth()) + 1);
      const date = nowDate.getDate();
      const day = nowDate.getDay();

      return year + '년 ' + month + '월 ' + date + '일 ' + dayToKorean[day] + '요일';
    }
    return '';
  };

  const renderComplete = () => {
    return list.reduce((accumulator, current) => {
      if (current.isComplete === false)
        return accumulator + 1;
      return accumulator;
    }, 0);
  }

  return (
    <div className="App">
      <div className="App-Wrapper">
        <div className="Header">
          <h1 className="Header-Title">TODOLIST</h1>
          <div className="Header-Day">{renderDate()}</div>
        </div>
        <div className="List-Count">할 일 {renderComplete()}개</div>
        <ToDoInput setList={setList} />
        <ToDoList
          setList={setList}
          list={list}
          />
      </div>
    </div>
  );
}
