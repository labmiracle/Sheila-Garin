const readline = require('readline');

const nroAleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);

function adivinarNumero() {
  const nroRandom = nroAleatorio;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let intentos = 0;

  const jugar = () => {
    rl.question('Ingrese un numero: ', (nroIngresado) => {
      intentos++;
      if (nroIngresado == nroRandom) {
        console.log(`Felicitaciones! Adivinaste el numero "${nroRandom}" en ${intentos} intentos.`);
        rl.close();
      } else if (nroIngresado < nroRandom) {
        console.log('El numero que intentas adivinar es mayor! Intenta de nuevo');
        jugar();
      } else {
        console.log('El numero que intentas adivinar es menor! Intenta de nuevo');
        jugar();
      }
    });
  };

  jugar();
}

adivinarNumero();

// TODO: complejidad :/
