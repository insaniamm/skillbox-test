// Типизация переменных и функций
function greeter(person: string): string {
    return `Hello, ${person}!`;
}

const user = "John Smith";
console.log(greeter(user));

// Работа с интерфейсами
interface Person {
    firstName: string;
    lastName: string;
}

function greeterWithInterface(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

const userWithInterface: Person = { firstName: "Jane", lastName: "Smith" };
console.log(greeterWithInterface(userWithInterface));

// Классы в TypeScript
class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}

const student = new Student("Walter", "H", "White");
console.log(greeterWithInterface(student));

// Использование массивов с типами
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(`Number: ${num}`);
});

// Типизация объектов
const employee: { id: number; name: string; active: boolean } = {
    id: 1,
    name: "Nick",
    active: true,
};

console.log(`Employee: ${employee.name}, Active: ${employee.active}`);

// Пример объединения типов
function printId(id: number | string): void {
    console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// Генерация ошибки для проверки строгой типизации
// console.log(greeter(42)); // Ошибка: Аргумент должен быть строкой