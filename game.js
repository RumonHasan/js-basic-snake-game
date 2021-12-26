import {SNAKE_SPEED, updateSnake, drawSnake} from './snake.js';
import {updateFood, drawFood, drawScoreBoard} from './food.js';
import {getSnakeHead, snakeIntersection, returnSnakeLength, drawFastSnake} from './snake.js';
import {outSideGrid} from './grid.js';
let lastTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');



function startGame(){
    if(gameOver){
        if(confirm('You lost. Press ok to restart')){
            window.location = '/';
        }
    }
    const startGamePrompt = document.createElement('div');
    startGamePrompt.textContent = 'Yo Homie you want to start the game right?';
    startGamePrompt.classList.add('start-prompt');
    gameBoard.appendChild(startGamePrompt);
    const startElement = document.querySelector('.start-prompt');
    startElement.addEventListener('click', e=>{
        e.preventDefault();
        if(e.target.value){
            main();
        }
    })
}

// main function to run the game
function main(currentTime){

    window.requestAnimationFrame(main);
    const secsLastRender = (currentTime - lastTime) / 1000;
    
    if(secsLastRender < 1 /updateSnakeSpeed()){ // controlling the render time based on snake speed variable
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
    checkDeath();
}

function updateSnakeSpeed(){
    let currentSnakeLength = returnSnakeLength();
    if(currentSnakeLength > 3){
        return SNAKE_SPEED + 5;
    }else if(currentSnakeLength > 8){
        return SNAKE_SPEED + 8;
    }else{
        return SNAKE_SPEED;
    }
};

function draw(){
    gameBoard.innerHTML=''; // clearing the game board in order to avoid copy of the elements
    let currentSnakeLength = returnSnakeLength();
    if(currentSnakeLength > 5){
        drawFastSnake(gameBoard)
    }else{
        drawSnake(gameBoard);
    }
    drawFood(gameBoard);
    drawScoreBoard(gameBoard);
}

function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}

startGame();