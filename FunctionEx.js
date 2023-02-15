function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke()
  background(220);
  
function fork(horizon, vertical, length) {
  translate (horizon, vertical)
  rect (150,100,20,length);
  rect (170,200,20,length);
  rect (190,100,20,length);
}
function ChangingColors() {
if (mouseX < 80) {
  fill("pink")
} else if (mouseX >= 80 && mouseX < 160) {
  fill ("cyan")
} else if (mouseX >= 160 && mouseX < 240) {
  fill ("limegreen")
} else if (mouseX >= 240 && mouseX < 320) {
  fill("purple")
} else {
  fill ("red")
}
}
 fork (30,40,100)
  fork (100,100,120)
  fork (-200,0, 120)
 ChangingColors()
}
