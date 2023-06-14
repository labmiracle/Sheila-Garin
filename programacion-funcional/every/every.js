const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

//1. ¿Todos los personajes tienen ojos azules?
const blueEyes = characters.every((character) => character.eye_color === 'blue');
console.log(blueEyes);

//2. ¿Todos los personajes tienen una masa superior a 40?
const massOver40 = characters.every((character) => {
    const numberMass = Number(character.mass);
    return numberMass > 40;
});
console.log(massOver40);

//3. ¿Todos los caracteres son más bajos que 200?
const height = characters.every((character) => {
    const numberHeight = Number(character.height);
    return numberHeight < 200;
});
console.log(height);

//4. ¿Todos los personajes son hombres?
const gender = characters.every((character) => character.gender === 'male');
console.log(gender);