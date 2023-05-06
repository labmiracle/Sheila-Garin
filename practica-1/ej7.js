let conteo = 0;
function cc(card){
    let positiva = [2, 3, 4, 5, 6];
    let negativa = [10, 'J', 'Q', 'K', 'A'];
    let cero = [7, 8, 9];

    if (positiva.indexOf(card) !== -1) conteo++;
    if (negativa.indexOf(card) !== -1) conteo--;
    if (cero.indexOf(card) !== -1) conteo = 0;
    
    if (conteo > 0){
        return `${conteo} Bet`;
    } else{
        return `${conteo} Hold`;
    }
}