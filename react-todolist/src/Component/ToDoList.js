import React from "../../node_modules/react";

import ToDoItem from "./ToDoItem";
import '../Style/ToDoList.css';
function ToDoList({ list, setList }) {
    const onClickList = (event) => {
        if (event.target.id && event.target.id.split('-').length > 1) {
            const buttonFunction = event.target.id.split('-')[1]
            if(buttonFunction === "Complete"){
                setList(
                    list.map((value) => {
                        if (event.target.id === "ToDo-Complete-" + String(value.id)) {
                            return { ...value, isComplete: !value.isComplete };
                        }
                        return value;
                    })
                );
            }
            if(buttonFunction === "Delete"){
                setList(
                    list.filter((value) => event.target.id !== "ToDo-Delete-" + String(value.id))
                );
            }
            if(buttonFunction === "Update"){
                setList(
                    list.map((value) => {
                        if (event.target.id === "ToDo-Update-" + String(value.id)) {
                            return { ...value, isUpdating: !value.isUpdating };
                        }
                        return value;
                    })
                );
            }
        }
    };

    const pressEnterKey = (event) => {
        if(event.charCode === 13){
            setList(
                list.map((value) => {
                    if (event.target.id === "ToDo-Updating-" + String(value.id)) {
                        return {
                            ...value,
                            content: event.target.value,
                            isUpdating: false
                        };
                    }
                    return value;
                })
            );
        }
    }

    return (<ul className="ToDo-List" onClick={onClickList}>
        {list.map((value) => (
            <ToDoItem
                key={value.id}
                id={value.id}
                content={value.content}
                isComplete={value.isComplete}
                isUpdating={value.isUpdating}
                pressEnterKey={pressEnterKey}
            />
        ))}
    </ul>);
}

export default ToDoList;