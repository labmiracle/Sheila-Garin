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

//1. ¿Hay al menos un personaje masculino?
const maleCharacter = characters.some((character) => character.gender === 'male');
console.log(maleCharacter);

//2. ¿Hay al menos un personaje con ojos azules?
const blueEyes = characters.some((character) => character.eye_color === 'blue');
console.log(blueEyes);

//3. ¿Hay al menos un personaje más alto que 200?
const height = characters.some((character) => {
    const numberHeight = Number(character.height);
    return numberHeight > 200;
});
console.log(height);

//4. ¿Hay al menos un personaje que tenga una masa inferior a 50?
const mass = characters.some((character) => {
    const numberMass = Number(character.mass);
    return numberMass < 50;
});
console.log(mass);