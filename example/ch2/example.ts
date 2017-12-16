// let & const
console.log("----LET & CONST----")
let variable = "Test"
console.log(variable)

variable = "Another value"
console.log(variable)

const maxLevels = 100
console.log(maxLevels)
//it is a constant or a read-only property.
//maxLevels = 99 // Won't work

//Block Scope
console.log("----Block Scope----")

function reset() {
    let variable = null
    console.log(variable)

}

reset()
console.log("after reset", variable)

// Arrow Functions
console.log("----Arrow Functions----")
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2
}
console.log(addNumbers(10, 3))

const multiplyNumbers = (number1: number, number2: number): number => number1 + number2
console.log(multiplyNumbers(10, 3))

const greet = () => {
    console.log("Hello")
}
greet()

const greetFriend = friend => console.log(friend)
greetFriend("Michael")

// Default Parameter
console.log("----Default Parameter----")
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--
    }
    console.log("Done!", start)
}
countdown()