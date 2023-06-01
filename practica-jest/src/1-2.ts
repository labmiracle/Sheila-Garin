export function biciesto(anio: number) {
    if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}