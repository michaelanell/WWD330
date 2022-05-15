const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {


    const hero = {}; // create an empty object

      //catch form values: 
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    hero.realName = form.realName.value;
    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
event.preventDefault(); // prevent the form from being submitted

alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
return hero;
}

