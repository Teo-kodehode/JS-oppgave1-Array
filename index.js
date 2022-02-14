//sets car array
let car = ["Engine", "Gas", "Windows", "Seats", "Doors", "Mirrors", "Tires", "Boot", "Battery", "Horn"]
console.log(car)

//Adds driver to the start of the array
car.unshift("Driver")
console.log(car)

//Removes driver/first in array
car.shift()
console.log(car)

//Adds driver "in the seat"/After the seats
car.splice(4, 0, "Driver")
console.log(car)

//Removes the item in position 7/index 6
car.splice(6, 1)
console.log(car)

//Adds crow to the end of the array
car.push("crow")
console.log(car)

//removes crow from the end of the array
car.pop()
console.log(car)



// set x to equal Pi(as large as you can find on internett)
// why not Math.PI?
let x = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481


// set y to equal Euler 's number
let y = 2.7182818284590452353602874713527


// set string1 to "this is Euler's number"
let string1 = "this is Euler's number"

// set string2 to "and this is pi"
let string2 = ", and this is pi"

// bruk tallet som du fant på internettet


// get the number of Pi to the fifth decimal.
let pi = x.toFixed(5)

// set Euler 's number to only contain 4 numbers.
let euler = y.toFixed(4)

// use the result of the last two tasks and multiply them together using a function.
function calc(){
    let newNumber = pi*euler
    return newNumber
}

// concatenate string 1 and 2.
let sentence = string1.concat(string2)

// write a function that puts the numbers in their right position in the new string.
function newSentence(){
    let newS = sentence.slice(0, 22) + " " + euler + sentence.slice(22) + " " + pi
    return newS
}

newSentence()

// ad a string that explains that the numbers have been multiplied and insert the number.

let finished = newSentence() + ", and here i have multiplied the numbers together: " + calc()
console.log(finished)