"use strict";
const myNumber = 2;
const user1 = {
    id: 1,
    name: "John"
};
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
console.log((addNum(3, 4)));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const brad = new Person(0, "Brad");
const jakub = new Employee(1, "Jakub", "Developer");
brad.id = 2;
console.log(brad.register());
console.table(jakub);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray(['Brad', "John"]);
