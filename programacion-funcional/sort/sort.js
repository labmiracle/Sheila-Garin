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

//1. Ordenar por nombre
characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(characters);

//2. Ordenar por masa
characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log(characters);

//3. Ordenar por altura
characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log(characters);

//4. Ordenar por género
characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(characters);
