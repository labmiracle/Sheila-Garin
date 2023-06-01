// Datos
const users = [
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Design Patterns', 'Refactoring'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Design Patterns'],
    },
];

// Función lookup()
export function lookup(login: string, property: string) {
    const usuarioEncontrado = users.find((user) => {
        return user.login === login;
    });

    if (typeof usuarioEncontrado === 'undefined') {
        throw new Error('Could not find user');
    }

    const valor = usuarioEncontrado[property as keyof typeof usuarioEncontrado];

    if (valor === undefined) {
        throw new Error('Could not find property');
    }

    return valor;
}