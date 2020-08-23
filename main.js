const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-super');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}
$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})

function init() {
    console.log('Start GAME');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
   person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(counter, person) {
    if (person.damageHP < counter){
        person.damageHP = 0;
        alert('Little '+ person.name + ' lose' );
        $btn.disabled = true;
    }
    else {
        person.damageHP -= counter;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random()*num);
}

$btn2.addEventListener('click', function () {
    console.log('superkick');
    superkick(character, enemy);
})

function superkick(character, enemy) {
    if (character.damageHP < 50){
        changeHP(30, enemy);
        alert('IMPRESSIVE, ' +character.name);
    }
}

init();
