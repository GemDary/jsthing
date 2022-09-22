console.log("for loop")
for (let number = 0; number < 10; number++) {
    if(number ==5) {
        // break
        continue
    }
    console.log(number)
}

console.log("while loop")
let number1 = 0;
while (number1 < 10) {
    console.log(number1)
    number1++
}

console.log("do-while loop")
let number2 = 11;
do {
    console.log(number2)
    number2++
} while (number2 < 10)

const cars = ["Audi", "Tesla", "BMW"]
cars.forEach(cars) => {
    console.log(car)
}

const person = {
    firstname: "Kadi",
    surname: "Tamm",
    age: 40
}

for (let personKey in person) {
    console.log(person[personKey])
}
