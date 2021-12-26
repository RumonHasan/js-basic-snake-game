import {onSnake, snakeExpansion} from './snake.js';
let food = {x: 10, y:1}; // indexes are from 1 to 21 
const SNAKE_EXPANSION_RATE = 1; // number blocks the snake will increase

export function updateFood(){
    if(onSnake(food)){ // checking whether the snake is on the food or not
        snakeExpansion(SNAKE_EXPANSION_RATE);
        food = {x: 20, y: 10}
    }
}

export function drawFood(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}