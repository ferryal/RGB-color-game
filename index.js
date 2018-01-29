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

colorDisplay.textContent= pickedColor

 function getRandomInt(min, max){
  return Math.floor(Math.random()* (max-min+1)) + min;
}

setInteval(function(){
  
})
for (var i = 0; i < square.length; i++) {
  square[i].style.background = color[i];

  square[i].addEventListener('click', function() {

    let colorPicked=this.style.background;
    if (colorPicked === pickedColor){
        alert('correct');
    }
  });
}
