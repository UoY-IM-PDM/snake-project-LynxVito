const GRID_SIZE = 20;
let numberOfCellsX, numberOfCellsY;
let speedX, speedY;
let randomCellX, randomCellFloorX, randomCellY, randomCellFloorY;
let foodY, foodX;
let food1X, food1Y, food2X, food2Y, food3X, food3Y;
let headX;
let headY;
let snakeSegments;

function setup() {
    createCanvas(600, 600);
    frameRate(4);

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

    snakeSegments = 1;

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
    square(headX, headY, GRID_SIZE, 5);

    
    gameOver()
    
    eatsFood(food1X, food1Y);
    eatsFood(food2X, food2Y);
    eatsFood(food3X, food3Y);

    //snakeGrows()

    //console.log(snakeSegments);

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

 function gameOver() {
    if(headX > GRID_SIZE && headX < width - GRID_SIZE && headY > GRID_SIZE && headY < height - GRID_SIZE) {
        keyPressed()
    }
    
    else {
        background(0);
        fill(50, 20, 100);
        rect(width / 2, height / 2, width - GRID_SIZE, height - GRID_SIZE);
        fill(255);

        //G

        rect(60, 170, 20, 150);
        rect(100, 245, 80, 20);
        rect(145, 210, 20, 70);
        rect(100, 95, 80, 20);
        rect(130, 170, 50, 20);

        //A

        rect(185, 175, 20, 160);
        rect(275, 175, 20, 160);
        rect(230, 170, 70, 20);
        rect(230, 95, 90, 20);

        //M
        rect(325, 170, 20, 170);
        rect(420, 170, 20, 170);
        square(335, 105, 20);
        square(410, 105, 20);
        square(345, 115, 20);
        square(400, 115, 20);
        square(355, 125, 20);
        square(390, 125, 20);
        square(365, 135, 20);
        square(380, 135, 20);
        square(372.5, 145, 20);

        //E

        rect(470, 170, 20, 150);
        rect(510, 245, 80, 20);
        rect(510, 95, 80, 20);
        rect(510, 170, 80, 20);

        //O

        rect(60, 415, 20, 150);
        rect(100, 490, 80, 20);
        rect(145, 415, 20, 150);
        rect(100, 340, 80, 20);

        //V

        rect(185, 395, 20, 130);
        rect(275, 395, 20, 130);
        square(195, 460, 20);
        square(265, 460, 20);
        square(205, 470, 20);
        square(255, 470, 20);
        square(215, 480, 20);
        square(245, 480, 20);
        square(225, 490, 20);
        square(235, 490, 20);

        //E

        rect(325, 415, 20, 150);
        rect(365, 415, 80, 20);
        rect(365, 340, 80, 20);
        rect(365, 490, 80, 20);

        //R

        rect(460, 420, 20, 160);
        rect(495, 415, 70, 20);
        rect(495, 340, 70, 20);
        square(530, 350, 20);
        square(530, 405, 20);
        rect(530, 377.5, 20, 40);
        rect(530, 470, 20, 60);
        square(510, 430, 20);
        square(520, 440, 20);
    }    
    
}

/* function snakeGrows() {

// how do i make it grow when it eats the food?

    if(headX === food1X && headY === food1Y) {
        snakeSegments++
    }

    if(headX === food2X && headY === food2Y) {
        snakeSegments++
    }

    if(headX === food3X && headY === food3Y) {
        snakeSegments++
    }
} */