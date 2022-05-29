
const form = document.forms['addItems'];

const item = form.elements.addItem;
let toDoItems = new Map();


form.addEventListener('submit', addItem);



function addItem() {
    let i = toDoItems.size + 1;
    toDoItems.set(i, item.value);
    alert(item.value);
    alert(toDoItems);
    
    createToDoList();
    console.log('done');
}

function createToDoList() {    
    console.log('got here');
    toDoItemsArray = Array.from(toDoItems);
    console.log(toDoItemsArray);
    
    const itemListElement = document.getElementById("to-do-menu-items");
    
    for (i = 0; i < toDoItemsArray.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = toDoItemsArray[i][0];
    }
    }
    

