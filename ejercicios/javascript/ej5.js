function camelize(str) {
    let array = str.split(' ');
    let arr = [];
 
    for (i = 0; i < array.length; i++) {
        if (i === 0 ){
            arr.push(array[i].toLowerCase());
        }else{
            arr[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
        }
    }
    let cadena = arr.join('');
    return cadena;
}
console.log(camelize('Hola a todos que tal'));
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');