const GRID_SIZE = 20;

let numberOfCells;
let speedX, speedY;
let randomCell, randomCellFloor;

let snake;
let food = [];

let foodAmount;

let gameOverFont;

let gameIsOver;

let snakeSpeed = [];

let score = [];
let highScore;

class Food {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    drawFood() {
       fill(230, 230, 0);
       circle(this.x, this.y, GRID_SIZE);
    // console.log("x: ", this.x, "y :", this.y, "grid size: ", GRID_SIZE)
    }
}

class Snake {
    snakeSegment = [];
    speedX;
    speedY;

    constructor(snakeX, snakeY, speedX, speedY) {
        this.snakeSegment.push(new Segment(snakeX, snakeY));
        this.speedX = speedX;
        this.speedY = speedY;
    }

    drawSnake() {
        for(let i = 0; i < this.snakeSegment.length; i++) {
            // if(i === 0) {
            //     fill(0, 255, 0);
            // }
            // else {
            //     fill(255, 0, 0);
            // }
            
            fill(0, 255, 0);
            square(this.snakeSegment[i].x, this.snakeSegment[i].y, GRID_SIZE, 5);
        }
    }

    snakeMoves() {
        
        let newSegment = new Segment(this.snakeSegment[0].x + GRID_SIZE * this.speedX,
                         this.snakeSegment[0].y + GRID_SIZE * this.speedY);
        this.snakeSegment.unshift(newSegment);
        this.snakeSegment.pop();
    
    }

    addSegment() {
        
        let newSegment = new Segment(this.snakeSegment[this.snakeSegment.length - 1].x - GRID_SIZE, 
            this.snakeSegment[this.snakeSegment.length - 1].y - GRID_SIZE)
        this.snakeSegment.push(newSegment);
    } 

    eatsFood(thisFood) {

        if(this.snakeSegment[0].x === thisFood.x && this.snakeSegment[0].y === thisFood.y) {
            snake.addSegment();
            score += 1;
            frameRate(score * 0.1 + 3);

            if(score % 5 === 0) {
                food.push(new Food(newFoodCoordinate(), newFoodCoordinate()));
            }

            // food = new Food(newFoodCoordinate(), newFoodCoordinate());

            return true;

        }

        else {
            return false;
        }
    } 
}

class Segment {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function setup() {
    createCanvas(600, 600);
    frameRate(3);

    foodAmount = 1;

    for(let i = 0; i < foodAmount; i++) {
        food.push(new Food(newFoodCoordinate(), newFoodCoordinate()));
    }

    // console.log(food.length);

    snake = new Snake(width / 2, height / 2, 1, 0);

    score = 0;

    gameIsOver = false;

    // speedX = 1;
    // speedY = 0;

    // snakeX.push(width / 2);
    // snakeY.push(height / 2);

    // console.log(snakeX[0])

}

function draw() {
    background(0);
    noStroke();
    rectMode(CENTER);
    fill(50, 20, 100);
    rect(width / 2, height / 2, width - GRID_SIZE, height - GRID_SIZE);
    // food[0].draw();
    for(let i = 0; i < food.length; i++) {
        // console.log(i)
        food[i].drawFood();
    }
    // food(food1X, food1Y);
    // food(food2X, food2Y);
    // food(food3X, food3Y);

    snake.snakeMoves();

    snake.snakeSegment[0].x = constrain(snake.snakeSegment[0].x, 0, width);
    snake.snakeSegment[0].y = constrain(snake.snakeSegment[0].y, 0, height);

    snake.drawSnake();
    
    gameOver();

    highScore = score[0];
    console.log(score, highScore);
    
    for(let i = 0; i < food.length; i++) {
        if(snake.eatsFood(food[i])) {
            food[i] = new Food(newFoodCoordinate(), newFoodCoordinate())
        }

    }
    // speedUp();
}

//  function food(food.x, food.y) {
//     food = constrain(foodX, 2 * GRID_SIZE, width - 2 * GRID_SIZE);
//     food = constrain(foodY, 2 * GRID_SIZE, height - 2 * GRID_SIZE);

//     fill(230, 230, 0);
//     circle(foodX, foodY, GRID_SIZE);

// } 

// function speedUp() {

//     // for(let i = 0; score.length > i; i++) {
//     //     if(score === i) {
//     //         frameRate(i + 1);
//     //         console.log(score, "i: ", i);
//     //     }
//     // }

//     // if(score >= 1) {
//     //     frameRate(4 + snakeSpeed);
//     //     console.log(snakeSpeed);
//     // }

//     if(score >= 1) {
//         frameRate(score + 3);
//     }
    
// }

function keyPressed() {
    if(gameIsOver === false) {
    if(key === "a") {
        snake.speedX = -1;
        snake.speedY = 0;
    }
    else if(key === "d") {
        snake.speedX = 1;
        snake.speedY = 0;
    }

    else if(key === "w") {
        snake.speedY = -1;
        snake.speedX = 0;
    } 
    else if(key === "s") {
        snake.speedY = 1;
        snake.speedX = 0;
    }
}
else {
    restart();
}
}

function restart() {
    if(key === " ") {
        frameRate(3);

        for(let i = 0; i < food.length; i++) {
            food[i] = new Food(newFoodCoordinate(), newFoodCoordinate());
        }

        snake = new Snake(width / 2, height / 2, 1, 0);
        gameIsOver = false;
        score = 0;
    }
}  

function newFoodCoordinate() {

    numberOfCells = width / GRID_SIZE;
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);

        let foodCoord = randomCellFloor * GRID_SIZE + GRID_SIZE * 2;
        foodCoord = constrain(foodCoord, GRID_SIZE, width - GRID_SIZE);
        return foodCoord;

}

// function eatsFood(foodX, foodY) {

//     if(snake.snakeX[0] === foodX && snake.snakeY[0] === foodY) {
//         food = new Food(newFoodCoordinate(), newFoodCoordinate());
//         snake.addSegment();
//     }
// } 

function preload() {
    gameOverFont = loadFont("assets/Oswald-SemiBold.ttf");
}

function gameOver() {
    if(snake.snakeSegment[0].x > 0 && snake.snakeSegment[0].x < width
        && snake.snakeSegment[0].y > 0 && snake.snakeSegment[0].y < height) {
        keyPressed();
    }
    
    else {
        background(0);
        fill(50, 20, 100);
        rect(width / 2, height / 2, width - GRID_SIZE, height - GRID_SIZE);

        gameIsOver = true;

        fill(255);
        textFont(gameOverFont);
        textSize(100);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2 - 50);

        textSize(20);
        text("PRESS [SPACE] TO RESTART", width / 2, height / 2 + 50);

        textSize(40);
        textAlign(RIGHT, CENTER);
        text(score, width - 40, 50);

        // displayHighScore();

        // restart();

    //     //G

    //     rect(60, 170, 20, 150);
    //     rect(100, 245, 80, 20);
    //     rect(145, 210, 20, 70);
    //     rect(100, 95, 80, 20);
    //     rect(130, 170, 50, 20);

    //     //A

    //     rect(185, 175, 20, 160);
    //     rect(275, 175, 20, 160);
    //     rect(230, 170, 70, 20);
    //     rect(230, 95, 90, 20);

    //     //M
    //     rect(325, 170, 20, 170);
    //     rect(420, 170, 20, 170);
    //     square(335, 105, 20);
    //     square(410, 105, 20);
    //     square(345, 115, 20);
    //     square(400, 115, 20);
    //     square(355, 125, 20);
    //     square(390, 125, 20);
    //     square(365, 135, 20);
    //     square(380, 135, 20);
    //     square(372.5, 145, 20);

    //     //E

    //     rect(470, 170, 20, 150);
    //     rect(510, 245, 80, 20);
    //     rect(510, 95, 80, 20);
    //     rect(510, 170, 80, 20);

    //     //O

    //     rect(60, 415, 20, 150);
    //     rect(100, 490, 80, 20);
    //     rect(145, 415, 20, 150);
    //     rect(100, 340, 80, 20);

    //     //V

    //     rect(185, 395, 20, 130);
    //     rect(275, 395, 20, 130);
    //     square(195, 460, 20);
    //     square(265, 460, 20);
    //     square(205, 470, 20);
    //     square(255, 470, 20);
    //     square(215, 480, 20);
    //     square(245, 480, 20);
    //     square(225, 490, 20);
    //     square(235, 490, 20);

    //     //E

    //     rect(325, 415, 20, 150);
    //     rect(365, 415, 80, 20);
    //     rect(365, 340, 80, 20);
    //     rect(365, 490, 80, 20);

    //     //R

    //     rect(460, 420, 20, 160);
    //     rect(495, 415, 70, 20);
    //     rect(495, 340, 70, 20);
    //     square(530, 350, 20);
    //     square(530, 405, 20);
    //     rect(530, 377.5, 20, 40);
    //     rect(530, 470, 20, 60);
    //     square(510, 430, 20);
    //     square(520, 440, 20);
    }    
}

// function displayHighScore() {
//     if (gameIsOver === true) {
//         highScore = score;
//     }
// }

// function snake() {
// for(let i = 0; i < snakeX.length; i++) {
//     if(i === 0) {
//         fill(0, 255, 0);
//     }
//     else {
//         fill(255, 0, 0);
//     }

//     square(snakeX[i], snakeY[i], GRID_SIZE, 5);
//     }
// }

// function snakeMoves() {

//     snakeX.unshift(snakeX[0] + GRID_SIZE * speedX);
//     snakeY.unshift(snakeY[0] + GRID_SIZE * speedY);
//     snakeX.pop();
//     snakeY.pop();

// }

// function addSegment() {
//     // for(let i = 0; i < snakeX.length; i++) {
//     //     snakeX[i] += GRID_SIZE * speedX;
//     //     snakeY[i] += GRID_SIZE * speedY;
//     //     snake();
//     // }

//     snakeX.push(snakeX[snakeX.length - 1] - GRID_SIZE);
//     snakeY.push(snakeY[snakeY.length - 1] - GRID_SIZE);
// } 