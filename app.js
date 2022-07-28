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
let slogans = [''];

// set event listeners
forestSection.addEventListener('change', () => {
  forestChanged++;
  forestPicture.style.backgroundImage = `url(./assets/${forestSection.value}.png)`
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


sloganButton.addEventListener('click', () => {

  displaySlogans();
  
});


function displayScore() {

  displayScores.textContent = `you have changed forest ${forestChanged} and have changed dock ${dockChanged} and have changed beach ${beachChanged} times`;
  
}





function displaySlogans() {

 for (let slogan of slogans) {
     const newPTag = document.createElement('p');
     allSlogans.append(newPTag);
   newPTag.textContent = sloganInput.value;
   sloganInput.value = '';
  }
  

}



//   // get user input
  // use user input to update state 
  // update DOM to reflect the new state
