(function(){

    // class Animal {
    //     constructor(name: string, surname: string) {
    //         this.name = name;
    //         this.surname = surname;
    //     }
    // }
    
    function Person(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
     
    const student = new Person("John", "Wick");
    console.log(student);
    
}());
