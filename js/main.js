window.onload = function createMenuItems() {
let weeklyTopics = new Map();

weeklyTopics.set('Week One','/week_one').set('Week Two', '/week_two');

topicsMenu = Array.from(weeklyTopics);

const topicsListElement = document.getElementById("week-menu-items");

for (i = 0; i < topicsMenu.length; i++) {
const liLink = document.createElement("a");
liLink.setAttribute("href", "topicsMenu[i][1]");
const liElement = document.createElement("li");

topicsListElement.appendChild(liLink);
liLink.appendChild(liElement);

liElement.innerHTML = topicsMenu[i][0];
} 
}
