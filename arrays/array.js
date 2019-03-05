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

[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

*/