import { fizzBuzz } from "../1-1";
import { biciesto } from '../1-2';
import { ADN } from '../1-3';
import { sumaPositivos } from '../1-4';
import { indiceCaracterRepetido } from '../1-5';
import { maxUnosConsecutivos } from '../1-6';
import { lookup } from '../1-7';
import { setPrice, addToCart } from "../1-8";



describe("Ejercicio 1.1 - FizzBuzz", () => {
    test('es divisible por 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    test('es divisible por 5', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    test('es divisible por 3 y 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(0)).toBe('FizzBuzz');
    });

    test('no es divisible por ninguno de los dos', () => {
        expect(fizzBuzz(4)).toBe('4');
    });
});

describe("Ejercicio 1.2 - Anio Biciesto", () => {
    test('es biciesto', () => {
        expect(biciesto(2004)).toBe(true);
        expect(biciesto(2000)).toBe(true);
        expect(biciesto(2012)).toBe(true);
        expect(biciesto(2016)).toBe(true);
    });
    test('no es biciesto', () => {
        expect(biciesto(2023)).toBe(false);
        expect(biciesto(2010)).toBe(false);
        expect(biciesto(2100)).toBe(false);
    });
});

describe("Ejercicio 1.3", () => {
    test('test', () => {
        expect(ADN("CTAGaGgGTA")).toBe("CTAGag");
        expect(ADN("CTAGGGTA")).toBe("CTAG");
        expect(ADN("Hola")).toBe("Hola");
    });
    test('cadena vacia', () => {
        expect(ADN("")).toBe("");
    });

});

describe("Ejercicio 1.4", () => {
    test('test', () => {
        expect(sumaPositivos([2, 2, '6'])).toBe(10);
        expect(sumaPositivos([2, '-2', '6'])).toBe(8);
    });
    test('arreglo vacio', () => {
        expect(sumaPositivos([])).toBe(0);
    });
});

describe("Ejercicio 1.5", () => {
    test('test', () => {
        expect(indiceCaracterRepetido("hola")).toBe(-1);
        expect(indiceCaracterRepetido("abc deC")).toBe(2);
        expect(indiceCaracterRepetido("abcdeff")).toBe(5);
        expect(indiceCaracterRepetido("abcdef fgge")).toBe(4);
    });
});

describe("Ejercicio 1.6", () => {
    test("otros valores", () => {
        expect(maxUnosConsecutivos([[1, 0, 1, 1, 5]])).toBe(-1);
        expect(maxUnosConsecutivos([[1, 0, "5"]])).toBe(-1);
    });
    test("test", () => {
        expect(maxUnosConsecutivos([[1, 0, 1, 1, 1, 0, 0]])).toBe(3);
        expect(maxUnosConsecutivos([[1, 0, 1, "1", 1, 0, 0]])).toBe(3);
        expect(maxUnosConsecutivos([[0, "1", 1, "1", 1, 0, 0, 1]])).toBe(4);

    });
});

describe('lookup()', () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup('norvig', 'likes');
        const expected = ['AI', 'Search', 'NASA', 'Mars'];

        expect(actual).toEqual(expected);
    });

    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup('knuth', 'lastName');
        const expected = 'Knuth';

        expect(actual).toEqual(expected);
    });
    it('with unknown user should throw an error with the correct message', () => {
        expect(() => {
            lookup('nobody', 'likes');
        }).toThrow(/Could not find user/);
    });
    it('with unknown property should throw an error the correct message', () => {
        expect(() => {
            lookup('mfowler', 'noprop');
        }).toThrow(/Could not find property/);
    });
});


describe('setPrice()', () => {
    it('should set the price in the given item object, immutably.', () => {
        const item = {
            name: 'test',
            price: 30,
        };
        const copy = Object.assign({}, item);

        const actual = setPrice(item, 50);
        const expected = {
            name: 'test',
            price: 50,
        };

        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
});


describe('addToCart()', () => {
    it('should add item to cart, immutably', () => {
        const originalCart: string | any[] = [];
        const item = {
            name: 'Toy',
            price: 30,
        };
        const copy = originalCart.slice();

        const actual = addToCart(originalCart, item);
        const expected = [item];

        expect(actual).toEqual(expected);
        expect(originalCart).toEqual(copy);
    });
});
