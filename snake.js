import { returnInputDirections } from "./input.js";
export const SNAKE_SPEED = 5;

// snake body that consists of one object array ready to be appended 
const snakeBody = 
[ {x:11, y:11} ];
let newSnakeSegments = 0;

export function updateSnake(){
    addSegments();// updating and adding the snake segments
    const inputDirection = returnInputDirections(); // getting the key events
    const secondLastIndex = snakeBody.length - 2; // second last element of the snake body
    for(let i = secondLastIndex; i >=0; i--){ // switches places between the last and the second last element
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    // adding movements to the first head of the snake
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })

}

export function snakeExpansion(expansionRate){
    newSnakeSegments +=expansionRate;
}

export function onSnake(foodPosition){
    return snakeBody.some((segment)=>{ // if any part of the snake returns true then it will return true
        return samePositions(segment, foodPosition);
    })
}

function samePositions(pos1, pos2){
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments (){ // function to add the extra segments gained from food
    for(let index = 0; index < newSnakeSegments; index++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]}); // adding an extra element similar to that of the last element
    }
    newSnakeSegments = 0;// need to define it back to 0 as the parent function will run with every frame
}