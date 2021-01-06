list = document.querySelector('.list');

class UserList{
    constructor(id){
        this.id = id;
        this.list = [];
    }

    addUser(user){
        this.list.push(user);
    }

    render(){
        list.innerHTML = this.list.map(current => {
            return `<li data-id=${current.id}>
                <div>이름 : ${current.name}</div>
                <div>이메일 : ${current.email}</div>
                <div>전화번호 : ${current.phone}</div>
            </li></br>`
        }).join('');
    }
}

myList = new UserList(1)

const fetchUsers = async (url) => {
    const response = await fetch(url);
    const users = await response.json();

    console.dir(users)
    users.map((current) => myList.addUser(current));
    myList.render();
    
    /*
    list.innerHTML = user.reduce((accumulator, current) => {
        return accumulator
            + `<li data-id=${current.id}>
                <div>이름 : ${current.name}</div>
                <div>이메일 : ${current.email}</div>
                <div>전화번호 : ${current.phone}</div>
            </li></br>`
    }, "");
    */
}

fetchUsers('https://jsonplaceholder.typicode.com/users');