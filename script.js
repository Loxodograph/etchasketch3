let gridHolder = document.querySelector(".grid-holder");
let container = document.querySelector('.container');
const button = document.getElementById('submit-btn');
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("onclick", updateSliderText);
slider.addEventListener("click", updateSliderText);
slider.addEventListener("change", updateSliderText);
sliderValue.style.color = `black`;

function generateDivs() {
  
    gridWidth = gridSize(); 
    color = random_rgb();
    let i = 0;
    //create the grid spans
    while (i < gridWidth ** 2){
        let box = document.createElement('div');
        box.innerText = ""
        box.classList.add('grid')
        box.style.background = "grey"
        box.style.width = `${40 / gridWidth}rem`;
        box.style.height = `${40 / gridWidth}rem`;
        container.appendChild(box);
        box.addEventListener("mouseover", function (){
        box.style.background = color;
        })

        box.addEventListener("touchmove", function() {
          box.style.background = color;
          console.log('mousemove')
        });
        
        box.addEventListener("touchstart", function() {
          box.style.background = color;
        });
        i++
    }
     
  }

function random_rgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}

function gridSize() {
  const value = document.getElementById("myRange").value;
  return value;
}
//generates default grid
generateDivs()

//chooses and resets gridSize
button.addEventListener("click", function() {
  removeElementsByClass("grid");
  generateDivs();
})

//remove elements by class Resets grid
function removeElementsByClass(className) {
  let elements = document.getElementsByClassName(className);
  while(elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
  }
}

//update slider choice
function updateSliderText() {
  let value = document.getElementById("myRange").value;
  sliderValue.innerText = `${value} x ${value}`;
}
