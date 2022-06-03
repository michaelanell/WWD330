
const form = document.forms['addItems'];

const item = form.elements.addItem;
let toDoItems = new Map();


form.addEventListener('submit', addItem);
document.querySelector('#to-do-menu-items').addEventListener('change', boxChecked);

function createToDoList() {    
    console.log('got here');

    toDoItemsArray = Array.from(toDoItems);
    console.log(toDoItemsArray);
    
    const itemList = document.getElementById("to-do-menu-items");

    let i = toDoItems.size - 1;
    checkBoxId = 'checkbox-' + i;
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute('type','checkbox');
    checkboxElement.setAttribute('id', checkBoxId);


    itemList.appendChild(liElement);
    
    liElement.innerHTML =  toDoItemsArray[i][1];
    liElement.appendChild(checkboxElement);
}

function boxChecked(){
    console.log('Got to the boxes');
}


function addItem(event) {
    event.preventDefault();
    let i = toDoItems.size + 1;
    toDoItems.set(i, item.value);
    console.log(item.value);
    createToDoList();

    item.value = '';
    console.log('done');

}
    

