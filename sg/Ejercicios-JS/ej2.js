function sum(arr, n) {
    let suma = 0;

    for(i = 0; i < n; i++){
        suma += arr[i];
    }

    return suma;
}

// recursiva
function sum2(arr, n) {
    if (n === 0) {
      return 0;
    } else{
        return arr[n-1] + sum(arr, n-1);
    }
}