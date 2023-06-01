export function indiceCaracterRepetido(cadena: string) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.indexOf(cadena[i], i + 1) !== -1) {
            return i;
        }
    }
    return -1;
}