let gridHolder = document.querySelector(".grid-holder");
let container = document.querySelector('.container');
const button = document.getElementById('submit-btn');
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("slider-value");
document.addEventListener("touchstart", function(){}, true);


// slider.addEventListener("onclick", updateSliderText);
// slider.addEventListener("click", updateSliderText);
// slider.addEventListener("change", updateSliderText);

//let checkbox change to random color
let checkbox = document.querySelector("input[name=switch]");

//let slider input update
slider.addEventListener("input", updateSliderText);
sliderValue.style.color = `black`;

function generateDivs() {
  
    let gridWidth = gridSize(); 
    let color = random_rgb();
    let i = 0;
    checkbox.addEventListener('change', colorSwitcher);
    //create the grid spans
    
    while (i < gridWidth ** 2){
        let box = document.createElement('div');
        box.innerText = ""
        box.classList.add('grid')
        box.style.background = "grey"
        box.style.width = `${40 / gridWidth}rem`;
        box.style.height = `${40 / gridWidth}rem`;
        container.appendChild(box);
        box.style.opacity = .3;

        //add color to mousover event
        box.addEventListener("mouseover", function (){
          
        box.style.background = color;

        if (box.style.opacity <= 0.9) {
          box.style.opacity = +box.style.opacity + 0.1;
          // +e.style.opacity to convert opacity from string to number
        }
      

        //add color randomizer to switch
        
        })
        i++
    }
     
  }

  //generate css for random rgb
function random_rgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}

//receive gridsize from slider

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


//function for generating random color
function colorSwitcher() {
  const gridBox = document.querySelectorAll(".grid") ;
  const gridBoxArray = [...gridBox]
  const staticColor = random_rgb();
  if (this.checked) {
    gridBoxArray.forEach(div => {
      div.addEventListener("mouseover", function (){
        div.style.background = `${random_rgb()}`;
        })
      });
  } else {
    gridBoxArray.forEach(div => {
      div.addEventListener("mouseover", function (){
        div.style.background = staticColor;
        })
      });
  }
}
