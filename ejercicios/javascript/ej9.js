function sumar() {
    let total = 0;
    let tipo = "";
    for (let i = 0; i < arguments.length; i++) {
        tipo = typeof arguments[i];
        if (tipo === "number"){
            total += arguments[i];
        }        
    }
    return total;
}