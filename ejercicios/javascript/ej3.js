function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let h = 0;
    let diasParaAlcanzarAltura = 0;
    if (velocidadCrecimiento && velocidadDecrecimiento && alturaDeseada > 0){
        while (h < alturaDeseada){
            diasParaAlcanzarAltura++;
            h += velocidadCrecimiento;
            if (h < alturaDeseada) h -= velocidadDecrecimiento;
        }
    return diasParaAlcanzarAltura;
    } else {
        return "Ingrese un numero valido";
    }
}
console.log(calcularDiasCrecimiento(15, 10, 50));
