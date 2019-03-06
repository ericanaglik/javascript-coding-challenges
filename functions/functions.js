/************************
       CHALLENGE 1:
Write a string scrambler!
************************/

// Step 1: Make a function to generate random numbers
function generateRandomNum(n) {
    return Math.floor(Math.random() * n)
}

// Step 2: Randomize characters in a string
function randomizeLetters(word) {
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
// generateRandomNum(10)
// console.log(randomizeWord("Erica"));

/**********************************
        CHALLENGE 1 modified:
Write a string scrambler sentence!
**********************************/

function randomizeSentence(sentence) {

}

/**********************************
        QUESTION 1
Write a function that counts to any number
printing each value to the console. When the
number is divisible by 3 in place of the value
print "fizz" when the number is divisible by "5"
print "buzz". If the number is divisible by 3 
and 5 print "fizz buzz".
**********************************/

class FunctionChallenge {
    constructor(num) {
        this.num = num;

    }

    countAndPrint() {
        for(let i = 0; i < this.num; this.num += 1) {
            if (this.num % 5 == 0) {
                console.log("fizz");
            } else if((num % 3 == 0) && (this.num % 5 == 0)) {
                console.log("fizzbuzz");
            } else {
                console.log(this.num);
            }
        } 

    }
}

let testing = new FunctionChallenge

let test = testing.countAndPrint(30);
console.log(test)



