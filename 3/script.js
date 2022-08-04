let values = prompt ("Digite números separados por una coma. Ejemplo: 2, 3, 4, 5")
let list = values.split(', ')

let duplicate = list.filter((i, index) => {
    return list.indexOf(i) !== index;
});

document.write(duplicate);
