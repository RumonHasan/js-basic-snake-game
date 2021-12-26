// input direction
let inputDirection = {x: 0, y:0}; // keyboard controlled input direction;
let lastInputDirection = {x: 0, y:0}; //using it to lock the same direction
// key controls
window.addEventListener('keydown', e => {
    console.log(e.key);
    switch (e.key) {
      case 'ArrowUp':
        if(lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 }
        break
      case 'ArrowDown':
        if(lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 }
        break
      case 'ArrowLeft':
        if(lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 }
        break
      case 'ArrowRight':
        if(lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 }
        break
    }
  })
// returns direction input after reading the keys
export function returnInputDirections(){
    lastInputDirection = inputDirection; // passing the current directions to the lastinput ones
    return inputDirection;
}