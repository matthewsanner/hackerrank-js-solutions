//given positions on a line, determines which cat will reach a stationary mouse first, or if they arrive at the same time, that the mouse escapes

function catAndMouse(x, y, z) {
    if(Math.abs(x-z)<Math.abs(y-z)){
        return 'Cat A';
    }
    if(Math.abs(x-z)>Math.abs(y-z)){
        return 'Cat B';
    }
    if(Math.abs(x-z)==Math.abs(y-z)){
        return 'Mouse C';
    }
}