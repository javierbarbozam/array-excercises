let values = prompt ("Digite números separados por una coma. Ejemplo: 2, 3, 4, 5")
let listA = values.split(', ')

let NewRequest = prompt ("Digite el número que desea eliminar. Ejemplo: 2.")

let listB = listA.filter((i) => i !== NewRequest)

console.log (listB)