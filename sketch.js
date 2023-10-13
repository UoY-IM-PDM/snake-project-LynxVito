const GRID_SIZE = 20;
let numberOfCellsX, numberOfCellsY;
let speedX, speedY;
let randomCellX, randomCellFloorX, randomCellY, randomCellFloorY;
let foodY, foodX;
let food1X, food1Y, food2X, food2Y, food3X, food3Y;
let headX;
let headY;

function setup() {
    createCanvas(600, 600);
    frameRate(5);

    numberOfCellsX = width / GRID_SIZE;
    randomCellX = random(numberOfCellsX);
    randomCellFloorX = floor(randomCellX);
    foodX = randomCellFloorX * GRID_SIZE + GRID_SIZE * 2;

    numberOfCellsY = height / GRID_SIZE;
    randomCellY = random(numberOfCellsY);
    randomCellFloorY = floor(randomCellY);
    foodY = randomCellFloorY * GRID_SIZE + GRID_SIZE * 2;

    speedX = GRID_SIZE

    food1X = random(0, width);
    food1Y = random(0, width);
    food2X = random(0, width);
    food2Y = random(0, width);
    food3X = random(0, width);
    food3Y = random(0, width);

}

function draw() {
    background(255)
    headX = constrain(speedX, GRID_SIZE, width - GRID_SIZE);
    headY = constrain(speedY, GRID_SIZE, height - GRID_SIZE);
    foodX = constrain(foodX, GRID_SIZE, width - GRID_SIZE);
    foodY = constrain(foodY, GRID_SIZE, height - GRID_SIZE);
    noStroke();
    rectMode(CENTER);

    if(headX > width) {
        speedX = -speedX;
    }

    if(headX < 0) {
        speedX = speedX * -1;
    }

    fill(0, 255, 0);
    square(headX, GRID_SIZE, GRID_SIZE);

    food(food1X, food1Y);
    food(food2X, food2Y);
    food(food3X, food3Y);

    /* if(speedX > 0) {
        headX += GRID_SIZE;
    }
    else if(speedX < 0) {
        headX += -GRID_SIZE;
    }
    else {
        headX = 0;
    }


    if(speedY > 0) {
        headY += GRID_SIZE;
    }
    else if(speedY < 0) {
        headY += -GRID_SIZE;
    }
    else {
        headY = 0;
    } */

}

 function food(foodX, foodY) {
    fill(255, 180, 50);
    circle(foodX, foodY, GRID_SIZE);
} 

function keyPressed() {
    if(key === "a") {
        speedX = -speedX;
    }
    else if(key === "d") {
        speedX = speedX;
    }
    else {
        speedX = 0
    }

    if(key === "w") {
        speedY = speedY;
    }
    else if(key === "s") {
        speedY = -speedY;
    }
    else {
        speedY = 0
    }
}

function head(headX, headY) {
    
}