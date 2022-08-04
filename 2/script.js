let values = prompt ("Digite números separados por una coma. Ejemplo: 2, 3, 4, 5")
let listA = values.split(', ')
let listB = []

let first_i = listA.shift() // takes the first item from the original array
let second_i = listA.pop() // takes the last item from the original array


listA.push(first_i) // Adds first_i at the end of the array
listA.unshift(second_i) // Adds second_i at the begginning of the array

console.log (listA)

