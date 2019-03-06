/*************************
       CHALLENGE 1:
Make a 2D Array that takes
width and height as a
parameter!
*************************/
const arr = [];

function make2dArray(width, height) {
    const arr = [];
    
    for (let num = 0; num < height; num += 1) {
        const arr2 = [];

        for (let i = 0; i < width; i += 1) {
            arr2.push(0);
        }
        arr.push(arr2);
        
    }
    return arr;
}

console.log(make2dArray(4, 9))
/*
Challenge 1 Example:

[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

*/

/**********************
       CHALLENGE 2:
Draw a Square in Array
**********************/

function drawSquareInArray(arr, x, y, size) {

}

/**********************
       CHALLENGE 3:
Overlay Array
**********************/

function overlayArray(arr1, arr2, index) {

}

// arr1 = [0,0,0,0,0,0,0,0,]
// arr2 = [2,3,4]
overlayArray(arr1, arr2, 3) // [0,0,0,2,3,4,0,0]