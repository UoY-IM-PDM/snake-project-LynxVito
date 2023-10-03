const GRID_SIZE = 20;
let headX = 0
let headY = 60
let foodX = 140
let foodY = 60

function setup() {
    createCanvas(600, 600)
    frameRate(3)
}
function draw() {
    background(255)
    noStroke()
    rectMode(CENTER)
    fill(0, 255, 0)
    square(headX, headY, GRID_SIZE)
    fill(255, 180, 50)
    circle(140, 60, GRID_SIZE)
    headX = headX + GRID_SIZE
}