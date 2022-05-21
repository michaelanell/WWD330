
// This block of code demonstrates how a basic event hander is created/works
/*
function doSomething(event) {
    console.log('Something happened!');
    // returns event type
    console.log(event.type);
    // target property returns reference to node that fired event
    console.log(event.target);
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

// event listener that calls doSomething

addEventListener('click', doSomething);
*/

// Mouse events
const clickParagraph =  document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

// Example using double click
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

// Mouse over / mouse out / mouse move
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('You moved!'));

// Key events




