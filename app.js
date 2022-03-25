// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     jobRate: [string, number],
// } = {
//     name: "John",
//     age: 23,
//     hobbies: ["Sports", "Cooking"],
//     jobRate: ["Web Developer", 3],
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role["EDITOR"] = "ALLOW_READING";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person);
// person.jobRate.push(5)
// for (const occupation of person.jobRate) {
//     console.log(occupation);   
// }
