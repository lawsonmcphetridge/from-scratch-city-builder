// import functions and grab DOM elements
const forestSection = document.getElementById('forest-section');
const dockSection = document.getElementById('dock-section');
const beachSection = document.getElementById('beach-section');

const forestPicture = document.getElementById('forest-picture');
const dockPicture = document.getElementById('dock-picture');
const beachPicture = document.getElementById('beach-picture');
const displayScores = document.getElementById('display-scores');
const allSlogans = document.getElementById('the-slogans');

const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');

let forestChanged = 0;
let dockChanged = 0;
let beachChanged = 0;
let slogans = [];

// set event listeners
forestSection.addEventListener('change', () => {
    forestChanged++;
    forestPicture.style.backgroundImage = `url(./assets/${forestSection.value}.png)`;
    displayScore();
});

dockSection.addEventListener('change', () => {
    dockChanged++;
    dockPicture.style.backgroundImage = `url(./assets/${dockSection.value}.png)`;
    displayScore();
});

beachSection.addEventListener('change', () => {
    beachChanged++;
    beachPicture.style.backgroundImage = `url(./assets/${beachSection.value}.png)`;
    displayScore();
});


function displayScore() {
  displayScores.textContent = `you have changed forest ${forestChanged} and have changed dock ${dockChanged} and have changed beach ${beachChanged} times`;
}

function displaySlogans() {
  console.log(slogans);
  allSlogans.textContent = '';
    for (let slogan of slogans) {
        const newPTag = document.createElement('p');
        newPTag.textContent = slogan;
        allSlogans.append(newPTag);
        
    }
}

sloganButton.addEventListener('click', () => {
  slogans.push(sloganInput.value);
  sloganInput.value = '';
  displaySlogans();
});



//   // get user input
// use user input to update state
// update DOM to reflect the new state
