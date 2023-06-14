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


//1. Obtener personajes con masa superior a 100
const mass = characters.filter(character => character.mass > 100);
console.log(mass);

//2. Obtener personajes con una altura inferior a 200
const height = characters.filter(character => character.height < 200);
console.log(height);

//3. Obtener todos los personajes masculinos
const maleGender = characters.filter(character => character.gender === 'male');
console.log(maleGender);

//4. Obtener todos los personajes femeninos
const femaleGender = characters.filter(character => character.gender === 'female');
console.log(femaleGender);