import React, { useState } from "../../node_modules/react";

import '../Style/ToDoInput.css';

function ToDoInput({ setList }) {
  const [inputTodoValue, setInputTodoValue] = useState("");
  const [id, setId] = useState(0);

  const onChangeInputList = (event) => {
    const { value } = event.target;
    setInputTodoValue(value);
  };

  const onClickAddList = () => {
    if (inputTodoValue) {
      setList((prev) => [
        ...prev,
        {
          id: id,
          content: inputTodoValue,
          isComplete: false,
          isUpdating: false
        }
      ]);
      setId((prev) => prev + 1);
      setInputTodoValue("");
    }
  };

  return (
    <div className="ToDo-Add">
      <input className="ToDo-Add-Input" onChange={onChangeInputList} value={inputTodoValue} />
      <button className="ToDo-Add-Button" onClick={onClickAddList}>ADD</button>
    </div>
  );
}

export default ToDoInput;
