const GRID_SIZE = 20;
let headX = 0;
let headY = 60;
let foodX;
let foodY;
let numberOfCellsX;
let numberOfCellsY;
movingRight = true;
let randomCellX;
let randomCellFloorX;
let randomCellY;
let randomCellFloorY;

function setup() {
    createCanvas(600, 600)
    frameRate(3)

    numberOfCellsX = width / GRID_SIZE
    randomCellX = random(numberOfCellsX)
    randomCellFloorX = floor(randomCellX)
    foodX = randomCellFloorX * GRID_SIZE + GRID_SIZE * 2

    numberOfCellsY = height / GRID_SIZE
    randomCellY = random(numberOfCellsY)
    randomCellFloorY = floor(randomCellY)
    foodY = randomCellFloorY * GRID_SIZE + GRID_SIZE * 2
}
function draw() {
    background(255)
    noStroke()
    rectMode(CENTER)
    fill(0, 255, 0)
    square(headX, headY, GRID_SIZE)
    fill(255, 180, 50)
    circle(foodX, foodY, GRID_SIZE)
    if(!movingRight && headX <= 0) {
        movingRight = true;
    }
    else if(movingRight && headX < width) {
        headX += GRID_SIZE;
    }
    else if(movingRight && headX >= width) {
        movingRight = false;
    }
    else if(!movingRight && headX > 0) {
        headX -= GRID_SIZE;
    }
}