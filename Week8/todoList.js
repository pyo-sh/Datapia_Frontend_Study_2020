const [input, button] = [...document.querySelector(".main").children]
const list = document.querySelector(".list")
console.dir(list)

let count = 0;
const click_Add_Button = () => {
    list.innerHTML += 
        `<li class = "list-element" id = "list-${count}">
            <div class = "list-updated">${input.value}</div>
            <button id = "delete">삭제</button>
            <button id = "update">수정</button>
        </li>`;
    input.value = '';
    count += 1;
}

const click_Delete_Button = (event) => {
    if (event.target.id == "delete"){
        list.innerHTML = [...list.children].reduce((accumulator, current) => {
            if (current.id != event.target.parentElement.id)
                return accumulator
                    + `<li class = "list-element" id = "list-${current.id}">
                        ${current.innerHTML}
                        </li>`;
            else
                return accumulator;
        }, "");
    }
    if (event.target.id == "update"){
        const content = event.target.parentElement.children[0];
        if (content.className == "list-updated"){
            console.dir(content)
            content.innerHTML = `<input value = "${content.innerText}"/>`
            content.className = "list-updating";
        }
        else{
            value = content.children[0].value;
            content.innerHTML = input.value;
            content.className = "list-updated";
        }
    }
}

button.addEventListener('click', click_Add_Button)
list.addEventListener('click', click_Delete_Button)