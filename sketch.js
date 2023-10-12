const GRID_SIZE = 20;
<<<<<<< Updated upstream
let foodX;
let foodY;
let numberOfCellsX;
let numberOfCellsY;
let speedX = GRID_SIZE;
let speedY = GRID_SIZE;
let randomCellX;
let randomCellFloorX;
let randomCellY;
let randomCellFloorY;
let movingRight = true;
let movingLeft = false;
let movingUp = false;
let movingDown = false;
=======
let headX = 0;
let headY = 60;
let foodY = 60;
let foodX = 60;
>>>>>>> Stashed changes

function setup() {
    createCanvas(600, 600)
    frameRate(5)

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
    speedX = constrain(speedX, GRID_SIZE, width - GRID_SIZE)
    speedY = constrain(speedY, GRID_SIZE, height - GRID_SIZE)
    noStroke()
    rectMode(CENTER)
    fill(0, 255, 0)
    square(speedX, speedY, GRID_SIZE)
    fill(255, 180, 50)
    circle(foodX, foodY, GRID_SIZE)
<<<<<<< Updated upstream

    if(speedX >= 0) {
        movingRight = true
    }

    if(movingRight = true) {
        speedX = speedX + GRID_SIZE
    }

    if(speedX <= 0) {
        movingLeft = true
    }

    if(movingRight = false) {
        speedX = speedX - GRID_SIZE
    }

    if(speedY >= 0) {
        movingUp = false
    }

    if(movingUp = false) {
        speedY = speedY - GRID_SIZE
    }

    if(movingDown <= 0)
    speedY = speedY + GRID_SIZE
}

function keyPressed() {
    if(key === "a") {
        movingRight = false
        movingLeft = true
        movingUp = false
        movingDown = false
    }

    if(key === "d") {
        movingRight = true
        movingLeft = false
        movingUp = false
        movingDown = false
    }

    if(key === "w") {
        movingRight = false
        movingLeft = false
        movingUp = true
        movingDown = false
    }

    if(key === "s") {
        movingRight = false
        movingLeft = false
        movingUp = false
        movingDown = true
    }
=======
    // headX = headX + GRID_SIZE
>>>>>>> Stashed changes
}