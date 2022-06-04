
const form = document.forms['addItems'];

const item = form.elements.addItem;
let toDoItems = new Map();
let toDoItemsArray;

form.addEventListener('submit', addItem);
document.querySelector('#to-do-menu-items').addEventListener('change', boxChecked);

// if complete button is clicked
document.getElementById('filter_complete').addEventListener("click", complete);
document.getElementById('filter_incomplete').addEventListener("click", incomplete);

let checkboxes = document.getElementsByClassName('toDoCheckboxes');


function createToDoList() {    
    console.log('got here');

    toDoItemsArray = Array.from(toDoItems);
    console.log(toDoItemsArray);
    
    const itemList = document.getElementById("to-do-menu-items");

    let i = toDoItems.size - 1;
    let checkBoxId = 'checkbox-' + i;
    let listItemId = 'item-' + i;

    const liElement = document.createElement("li");
    liElement.setAttribute('id', listItemId);
    liElement.setAttribute('class', 'to_do_list_item');

    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute('type','checkbox');
    checkboxElement.setAttribute('id', checkBoxId);
    checkboxElement.setAttribute('class','toDoCheckboxes');


    itemList.appendChild(liElement);
    
    liElement.innerHTML =  toDoItemsArray[i][1];
    liElement.appendChild(checkboxElement);
}

function boxChecked(){

    checkboxesArray = Array.from(checkboxes);

  for (let i = 0; i < checkboxesArray.length; i++) {
    if (document.getElementById('checkbox-' + i).checked) {
        const elementCheckbox = document.getElementById('checkbox-' + i);
        const elementListItem = document.getElementById('item-' + i);

        elementCheckbox.style.display = "none";
        elementListItem.style.display = "none";
    
    }
  }
}

 function complete() {
     checkboxesArray = Array.from(checkboxes);
     for (let i = 0; i < checkboxesArray.length; i++) {
       if (document.getElementById('checkbox-' + i).checked) {
           // const elementCheckbox = document.getElementById('checkbox-' + i);
            const elementListItem = document.getElementById('item-' + i);
    
            elementListItem.style.display = "block";
        } else {
            const elementListItem = document.getElementById('item-' + i);
            elementListItem.style.display = "none";
        }
      }
 }

 function incomplete() {
    checkboxesArray = Array.from(checkboxes);
    for (let i = 0; i < checkboxesArray.length; i++) {
      if (document.getElementById('checkbox-' + i).checked == false) {
          // const elementCheckbox = document.getElementById('checkbox-' + i);
           const elementListItem = document.getElementById('item-' + i);
   
           elementListItem.style.display = "block";
       } else {
           const elementListItem = document.getElementById('item-' + i);
           elementListItem.style.display = "none";
       }
     }
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
    

