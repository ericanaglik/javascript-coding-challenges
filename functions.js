/************************
       CHALLENGE 1:
Write a string scrambler!
************************/

// Step 1: Make a function to generate random numbers
function generateRandomNum(n) {
    return Math.floor(Math.random() * n)
}

// Step 2: Randomize characters in a string
function randomizeWord(word) {
    // Splits string into an array
    const newArray = word.split("")
    // the new string after randomization
    let newStr = ''
    // Get a random letter from the array and then remove it so it can't be picked again
    while(newArray.length > 0) {
        // remove a random item
        let randItem = newArray.splice(generateRandomNum(newArray.length),1)
        // add the item to the newStr
        newStr = newStr + randItem
    }
    return newStr
}

// Test
generateRandomNum(10)
console.log(randomizeWord("Erica"));


