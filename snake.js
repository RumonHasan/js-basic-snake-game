import { returnInputDirections } from "./input.js";
export const SNAKE_SPEED = 4;

// snake body that consists of one object array ready to be appended 
const snakeBody = 
[ {x:11, y:11} ];
let newSnakeSegments = 0;

const colorObject = {
    fast: 'green',
    superFast : 'purple',
    insaneSpeed: 'orange',
}

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

export function drawSnake(gameBoard){ // draws the snake and each aprt
    snakeBody.forEach((segment, index)=>{
        const snakeElement = document.createElement('div');
        snakeElement.textContent = index + 1;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })

}

export function drawFastSnake(gameBoard){
    snakeBody.forEach((segment, index)=>{
        const snakeElement = document.createElement('div');
        snakeElement.textContent = index + 1;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        if(snakeBody.length > 7){
            snakeElement.style.backgroundColor = colorObject.fast
        }else if (snakeBody.length > 8){
            snakeElement.style.backgroundColor = colorObject.superFast
        }else if(snakeBody.length > 10){
            snakeElement.style.backgroundColor = colorObject.insaneSpeed
        }
        snakeElement.classList.add('fast-snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function returnSnakeLength(){
    return snakeBody.length;
}

export function snakeExpansion(expansionRate){
    newSnakeSegments +=expansionRate;
}

export function onSnake(foodPosition, {ignoreHead = false }= {}){
    return snakeBody.some((segment, index)=>{ // if any part of the snake returns true then it will return true
        if(ignoreHead === true && index === 0) return false; 
        return samePositions(segment, foodPosition); // returns the boolean value after position check
    })
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function samePositions(pos1, pos2){ // returns true or false if the positions are equal
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