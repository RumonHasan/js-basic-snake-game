import {SNAKE_SPEED, updateSnake, drawSnake} from './snake.js';
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

window.requestAnimationFrame(main);

function update(){
    updateSnake();
}

function draw(){
    drawSnake(gameBoard);
}