let color = [
  "rgb(255, 0, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
]
let square= document.querySelectorAll(".square");
let pickedColor= color[3];
let colorDisplay=document.getElementById("colorDisplay");
let message =document.querySelector('#message');

colorDisplay.textContent= pickedColor

let getRandomInt= (min, max) => {
  return Math.floor(Math.random()* (max-min+1)) + min;
}
//
// let setInterval = () => {
//   let colors = document.querySelector('#square');
//   let r = getRandomInt(0,255);
//   let g = getRandomInt(0,255);
//   let b = getRandomInt(0,255);
//
//   colors.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   document.getElementById("colorDisplay").innerHTML =`${r}, ${g}, ${b}`;
// }

for (var i = 0; i < square.length; i++) {
  square[i].style.background = color[i];

  square[i].addEventListener('click', function() {

    let colorPicked=this.style.background;
    if (colorPicked === pickedColor){
        message.textContent = "Correct";
        changeColor(colorPicked);
    } else {
      this.style.background = "#232323";
      message.textContent = "Try Again";
    }
  });
}

//
// let changeColor =  (color) => {
//   for (var i = 0; i < color.length; i++) {
//     color[i].style.background =color;
//   }
// }
