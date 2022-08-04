let values = prompt ("Digite números separados por una coma. Ejemplo: 2, 3, 4, 5")
let listA = values.split(', ')
let listB = []

let total = listA.reduce (myfunction)
function myfunction (a,b){
	return a*b
}

document.write("Los números ingreados fueron "+listA+" y su multiplicación por sí mismos sería " + total)