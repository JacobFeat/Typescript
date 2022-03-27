(function(){
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



enum Role { ADMIN, EDITOR = "ALLOW_READING", READ_ONLY = 2}

const person = {
    name: "John",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
}

console.log(person);




// person.jobRate.push(5)

// for (const occupation of person.jobRate) {
//     console.log(occupation);   
// }

 
});