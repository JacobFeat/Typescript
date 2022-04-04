const myNumber = 2;

interface UserInterface {
    readonly id: number,
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}


let cid: any = 1;
let customerId = cid as number

function addNum(x: number, y: number): number {
    return x + y;
}

console.log((addNum(3, 4)));

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position;
    }
}

const brad = new Person(0, "Brad")
const jakub = new Employee(1, "Jakub", "Developer")

brad.id = 2

console.log(brad.register());
console.table(jakub);

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<string>(['Brad', "John"])