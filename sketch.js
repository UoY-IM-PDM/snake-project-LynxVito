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
    frameRate(3);

    speedX = GRID_SIZE
    speedY = 0

    headX = GRID_SIZE
    headY = GRID_SIZE

    food1X = newFoodCoordinate();
    food1Y = newFoodCoordinate();
    food2X = newFoodCoordinate();
    food2Y = newFoodCoordinate();
    food3X = newFoodCoordinate();
    food3Y = newFoodCoordinate();

}

function draw() {
    background(255)
    noStroke();
    rectMode(CENTER);

    food(food1X, food1Y);
    food(food2X, food2Y);
    food(food3X, food3Y);

    headX += speedX;
    headY += speedY;

    headX = constrain(headX, GRID_SIZE, width - GRID_SIZE);
    headY = constrain(headY, GRID_SIZE, height - GRID_SIZE);

    fill(0, 255, 0);
    square(headX, headY, GRID_SIZE);

    // eatsFood() 

}

 function food(foodX, foodY) {
    foodX = constrain(foodX, GRID_SIZE, width - GRID_SIZE);
    foodY = constrain(foodY, GRID_SIZE, height - GRID_SIZE);

    fill(255, 180, 50);
    circle(foodX, foodY, GRID_SIZE);
} 

function keyPressed() {
    if(key === "a") {
        speedX = -GRID_SIZE;
        speedY = 0;
    }
    else if(key === "d") {
        speedX = GRID_SIZE;
        speedY = 0;
    }

    else if(key === "w") {
        speedY = -GRID_SIZE;
        speedX = 0
    } 
    else if(key === "s") {
        speedY = GRID_SIZE;
        speedX = 0
    }
}

function newFoodCoordinate() {
    numberOfCellsX = width / GRID_SIZE;
    randomCellX = random(numberOfCellsX);
    randomCellFloorX = floor(randomCellX);
    return randomCellFloorX * GRID_SIZE + GRID_SIZE * 2;
}

/* function eatsFood() {
    if(headX === food1X && headY === food1Y()) {
        food1X = newFoodCoordinate();
        food1Y = newFoodCoordinate();
        food2X = newFoodCoordinate();
        food2Y = newFoodCoordinate();
        food3X = newFoodCoordinate();
        food3Y = newFoodCoordinate();
    }
} */