import {SNAKE_SPEED, updateSnake, drawSnake} from './snake.js';
import {updateFood, drawFood} from './food.js';
let lastTime = 0;
const gameBoard = document.getElementById('game-board');

// main function to run the game
function main(currentTime){
    window.requestAnimationFrame(main);
    const secsLastRender = (currentTime - lastTime) / 1000;
    if(secsLastRender < 1 /SNAKE_SPEED){ // controlling the render time based on snake speed variable
        return; 
    }
    lastTime = currentTime;

    // update the game logics
    update();
    draw(); // draws the food when the snake is updated
}

window.requestAnimationFrame(main); // starting the frame animations for the first time

function update(){
    updateSnake();
    updateFood();
}

function draw(){
    gameBoard.innerHTML=''; // clearing the game board in order to avoid copy of the elements
    drawSnake(gameBoard);
    drawFood(gameBoard);
}