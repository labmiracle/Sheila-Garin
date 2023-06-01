export function sumaPositivos(arreglo: string | any[]) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (Number(arreglo[i] > 0)) {
            suma += Number(arreglo[i]);
        }
    }
    return suma;
}