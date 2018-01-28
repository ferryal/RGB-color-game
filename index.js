let color = [
  "rgb(255, 0, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
]

let square= document.querySelectorAll('.square');

for (var i = 0; i < square.length; i++) {
  square[i].style.background = color[i];
}
