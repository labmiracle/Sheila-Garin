function combineTwoArrays(arr1, arr2){
    let arreglo = [...arr1, ...arr2];
    return arreglo;
}
console.log(combineTwoArrays([1,2,3], [4,5,6]));