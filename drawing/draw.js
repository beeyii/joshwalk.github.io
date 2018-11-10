var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");

ctx.canvas.width = 800;
ctx.canvas.height = 500;

document.addEventListener("mousemove", draw);
document.addEventListener("mouseenter", setPosition);
document.addEventListener("keydown", draw);

// starting position
var pos = { x: 0, y: 0 };

// get mouse position
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

var size = 5; // default stroke size
var color = 'blue'; // default color

function draw(e) {
  if (e.keyCode == 66) { color = 'blue'; } // b
  if (e.keyCode == 71) { color = 'green'; } // g
  if (e.keyCode == 82) { color = 'red'; } // r
  if (e.keyCode == 89) { color = 'yellow'; } // y
  if (e.keyCode == 32) { ctx.clearRect(0,0, 800, 500); } // spacebar

  // up/down, increases/decreases lineWidth
  if (e.keyCode == 38) { size += 5; }
  if (e.keyCode == 40) {
    if (size > 5) {
      size -= 5;
    }
  }

  ctx.beginPath();

  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}
