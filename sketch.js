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

    speedX = GRID_SIZE;
    speedY = 0;

    headX = width / 2;
    headY = height / 2;

    food1X = newFoodCoordinate();
    food1Y = newFoodCoordinate();
    food2X = newFoodCoordinate();
    food2Y = newFoodCoordinate();
    food3X = newFoodCoordinate();
    food3Y = newFoodCoordinate();

}

function draw() {
    background(0);
    noStroke();
    rectMode(CENTER);

    fill(50, 20, 100);
    rect(width / 2, height / 2, width - GRID_SIZE, height - GRID_SIZE);

    food(food1X, food1Y);
    food(food2X, food2Y);
    food(food3X, food3Y);

    headX += speedX;
    headY += speedY;

    headX = constrain(headX, GRID_SIZE, width - GRID_SIZE);
    headY = constrain(headY, GRID_SIZE, height - GRID_SIZE);

    fill(0, 255, 0);
    square(headX, headY, GRID_SIZE);

    
    eatsFood(food1X, food1Y);
    eatsFood(food2X, food2Y);
    eatsFood(food3X, food3Y);

}

 function food(foodX, foodY) {
    foodX = constrain(foodX, 2 * GRID_SIZE, width - 2 * GRID_SIZE);
    foodY = constrain(foodY, 2 * GRID_SIZE, height - 2 * GRID_SIZE);

    fill(230, 230, 0);
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
        speedX = 0;
    } 
    else if(key === "s") {
        speedY = GRID_SIZE;
        speedX = 0;
    }
}

function newFoodCoordinate() {
    numberOfCellsX = width / GRID_SIZE;
    randomCellX = random(numberOfCellsX);
    randomCellFloorX = floor(randomCellX);
    return randomCellFloorX * GRID_SIZE + GRID_SIZE * 2;
}

function eatsFood() {

    //how do i make this shorter??

    if(headX === food1X && headY === food1Y) {
        food1X = newFoodCoordinate();
        food1Y = newFoodCoordinate();
    }

    if(headX === food2X && headY === food2Y) {
        food2X = newFoodCoordinate();
        food2Y = newFoodCoordinate();
    }

    if(headX === food3X && headY === food3Y) {
        food3X = newFoodCoordinate();
        food3Y = newFoodCoordinate();
    }
} 

/* function gameOver() {
    if(headX > GRID_SIZE && headX < width - GRID_SIZE && headY > GRID_SIZE && headY < GRID_SIZE - height) {
        headX += speedX;
        headY += speedY;
    }

// how do i make it not move after it hits the edges?
    
    else {
        if(key === "a") {
            speedX = 0;
            speedY = 0;
        }
        else if(key === "d") {
            speedX = 0;
            speedY = 0;
        }
    
        else if(key === "w") {
            speedY = 0;
            speedX = 0;
        } 
        else if(key === "s") {
            speedY = 0;
            speedX = 0;
        }
    }
} */

function snakeGrows() {

// how do i make it grow when it eats the food?

    if(eatsFood()) {
        fill(0, 255, 0);
        square(headX - GRID_SIZE, headY - GRID_SIZE, GRID_SIZE);
    }
}