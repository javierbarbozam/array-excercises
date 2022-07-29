let list = []

while (true) {
	var item = Number (prompt("Digite un número. Ejemplo: 20"));

	list.push(item)

	var finish = prompt ("¿Desea ingresar otro dígito? Digite si o no");
	if (finish === "si") {
		break;
	}
}

let doubles = list.map (multiply)
function multiply (num){
	return num * 2
}

document.write("Los números ingreados fueron "+list+" y su multiplicación por sí mismos sería " + doubles)