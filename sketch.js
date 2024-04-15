//I use chatGPT to assist in creating and building this p5 sketch. I have made improvements and adjustments to the code as necessary 

// Define variables
let fillColor, x, y, size;


function setup() {
  createCanvas(windowWidth, windowHeight);
}
g
function draw() {
  frameRate(60); 
  drawCircle(); 
  drawText(); // Draw the text "WOK BOOK"
}


function rollDice() {
  let r = roll(0, 255); 
  let g = roll(0, 255);
  let b = roll(0, 255); 
  fillColor = color(r, g, b); 
  x = random(width); 
  y = random(height); 
  size = roll(10, 50); 
}


function drawCircle() {
  rollDice(); 
  
  fill(fillColor);
  ellipse(x, y, size, size); // Circle
}

// Draw text function
function drawText() {
  textSize(100); 
  textAlign(CENTER, CENTER); 
  fill(255); 
  text("WORK BOOK", width / 2, height / 2); 
}


function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
