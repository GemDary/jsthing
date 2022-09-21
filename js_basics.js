const numbers1 = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54)

let val
val = numbers1.length
val = numbers2.length

val = numbers1[3]
val = numbers1.indexOf(36)

val = Array.isArray(numbers2)

numbers1.push(250)
numbers1.unshift(120)
numbers1.shift()

val = numbers1.concat(numbers2)

console.log(numbers1)
numbers1.sort()
console.log(numbers1)

const fruits = ["banana", "apple", "orange"]
val = fruits.sort()

val = numbers1.sort(function(x, y) {return x - y})