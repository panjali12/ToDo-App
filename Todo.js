let todoList =[
    {
        item: 'Valentines Day',
        dueDate: '14/02/2024'
    }
];
displayItems();

function addtodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let dateItem = dateElement.value;
    let todoItem = inputElement.value;
    todoList.push({item: todoItem , dueDate: dateItem});
    inputElement.value ='';
    dateElement.value ='';
     displayItems();
}

function displayItems() {
    let containerElement =document.querySelector('.todo-container');
    let newHtml =``
    for( let i=0; i< todoList.length;i++){
        let { item , dueDate}= todoList[i];
        newHtml +=`
         <span class="item-color"> ${item}</span>
        <span class="item-color"> ${dueDate}</span>
        <button class="button-todo-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML= newHtml;
}