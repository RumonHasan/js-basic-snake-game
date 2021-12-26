import {onSnake, snakeExpansion} from './snake.js';
import {randomGridPositions} from './grid.js';
let score = 0;
let food = getRandomFoodPosition(); // indexes are from 1 to 21 
const SNAKE_EXPANSION_RATE = 1; // number blocks the snake will increase

export function updateFood(){
    if(onSnake(food)){ // checking whether the snake is on the food or not
        snakeExpansion(SNAKE_EXPANSION_RATE);
        food = getRandomFoodPosition();
        updateScore();
    }
}

 function updateScore(){
    return score = score + 1;
}

export function drawScoreBoard(gameBoard){
    const scoreElement = document.createElement('h1');
    scoreElement.textContent = score;
    scoreElement.classList.add('score-board');
    gameBoard.appendChild(scoreElement);
}

export function drawFood(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
        let newFoodPosition
        while (newFoodPosition == null || onSnake(newFoodPosition)) {
          newFoodPosition = randomGridPositions()
        }
        return newFoodPosition
      }