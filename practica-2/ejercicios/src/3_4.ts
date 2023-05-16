function greet(greeting: string = "hola"): string {
    return greeting.toUpperCase();
}

const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
console.log('[Ejercicio 3.4]', defaultGreeting);

// Añadir tipos explícitos a los parámetros y tipo de retorno
// Añadir un saludo predeterminado: ”hola”