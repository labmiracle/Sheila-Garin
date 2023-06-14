//Dado el siguiente arreglo:
const users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. Mapealo a un arreglo de strings: firstName-lastName: role
const map = users.map(user => `${user.firstName}-${user.lastName}: ${user.role}`);
console.log(map);


// 2. Filtra aquellos usuarios con role de Full Stack Resident
const usersRole = users.filter(user => user.role === 'Full Stack Resident');
console.log(usersRole);

// 3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
//    con los objetos usuarios que tienen dicho role
function rol(users) {
    return users.reduce((obj, user) => {
        const role = user.role;

        if (!obj[role]) {
            obj[role] = [];
        }

        obj[role].push(user);

        return obj;
    }, {});
}
const objectUser = rol(users);
console.log(objectUser);

// 4. Genera una función de búsqueda de un usuario por firstName con find
function userFirstname(users, firstname) {
    return users.find(user => user.firstName === firstname);
}
const user = userFirstname(users, "Chloe");
console.log(user);