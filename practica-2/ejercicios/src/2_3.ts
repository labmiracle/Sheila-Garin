const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten<T>(array: (T | T[])[]): T[] {
    const flattened: T[] = [];;

    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }
    }
    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);