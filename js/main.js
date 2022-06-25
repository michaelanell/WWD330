function createMenuItems() {
let weeklyTopics = new Map();

weeklyTopics.set('Week One','week_one').set('Week Two', 'week_two').set('Week Three', 'week_three').set('Week Four', 'week_four').set('Week Five', 'week_five').set('Week Six','week_six').set('Week Seven','week_seven').set('Week Eight','week_eight').set('Week Nine','week_nine').set('Week Ten','week_ten');

topicsMenu = Array.from(weeklyTopics);

const topicsListElement = document.getElementById("week-menu-items");

for (i = 0; i < topicsMenu.length; i++) {
const liLink = document.createElement("a");
liLink.setAttribute("href", `${topicsMenu[i][1]}`);
const liElement = document.createElement("li");

topicsListElement.appendChild(liLink);
liLink.appendChild(liElement);

liElement.innerHTML = topicsMenu[i][0];
}
}
