
function palabraMasLarga(str) {
    let arr = str.split(' ');
    let palabra = arr[0];
  
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > palabra.length){
            palabra = arr[i];
        }
    }
    return palabra;
}
//console.log(palabraMasLarga('Erase una vez que se era'));
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

function primeraMayuscula(str) {
    let array = str.split(' ');
    let arr = [];
    for (i = 0; i < array.length; i++) {
        arr[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase()
    }
    let cadena = arr.join(' ');
    return cadena;
}
//console.log(primeraMayuscula('En un lugar de la Mancha'));
console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');