// Declaracion de variables
const userName: string = 'Max';

// Doble tipado
const userName2: string | number = 'Max';

const sum = (a: number, b: number) => {
    return a + b;
}
sum(1, 2);


class Person {
    private name: string;
    private age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
}

const max = new Person('Max',30);

console.log(max.getName, max.getAge);
