export function maxUnosConsecutivos(matriz: any[]) {
    let maxConsecutivos = 0;
    let consecutivos = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const elemento = Number(matriz[i][j]);

            if (elemento !== 0 && elemento !== 1) {
                return -1;
            }

            if (elemento === 1) {
                consecutivos++;
                maxConsecutivos = Math.max(maxConsecutivos, consecutivos);
            } else {
                consecutivos = 0;
            }
        }
        consecutivos = 0;
    }

    return maxConsecutivos;
}
