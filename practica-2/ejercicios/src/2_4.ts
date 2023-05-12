type BirdLike = {
    layEggs(): void;
    fly(height: number): void;
    species: string;
}

type FishLike = {
    layEggs(): void;
    swim(depth: number): void;
    species: string;
}

type Animal = BirdLike | FishLike;

class Bird implements BirdLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }
    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};
class Fish implements FishLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal(): Animal {
    const animals: Animal[] = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()) {
    if (animal instanceof Fish) {
        animal.swim(10);
        animal.layEggs();
    } else if (animal instanceof Bird) {
        animal.fly(10);
        animal.layEggs();
    }
    return animal.species; //
}

console.log('[Ejercicio 4.4]',
    `Tenemos un ${interrogateAnimal()} en nuestras manos!`);