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

// 1. Obtener la masa total de todos los personajes
const totalMass = characters.reduce((acum, character) =>{
    const mass = parseInt(character.mass);
    return acum + mass;
}, 0);
console.log(totalMass);

// 2. Obtener la altura total de todos los caracteres
const totalHeight = characters.reduce((acum, character) =>{
    const height = parseInt(character.height);
    return acum + height;
}, 0);
console.log(totalHeight);

// 3. Obtener el número total de caracteres en todos los nombres de los 
//personajes
const caracteres = characters.reduce((acum, character) =>{
    const name = character.name.replace(/\s/g, '');
    return acum + name.length;
}, 0);
console.log(caracteres);