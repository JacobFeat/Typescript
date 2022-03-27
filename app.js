(function () {
    // class Animal {
    //     constructor(name: string, surname: string) {
    //         this.name = name;
    //         this.surname = surname;
    //     }
    // }
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    var student = new Person("John", "Wick");
    console.log(student);
}());
