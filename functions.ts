(function () {

    function add(n1: number, n2: number) {
        return n1 + n2;
    }

    function andAndHandle(n1: number, n2: number, cb: (num: number) => void) {
        const result = n1 + n2;
        cb(result);
        
    }

    function printResult(num: number): void {
        console.log(`Result: ${num}`);
    }


    printResult(add(2, 3));

    // let combineValues: Function;
    let combineValues: (a: number, b: number) => number;

    combineValues = add;

    const addedValues = andAndHandle(4, 2, (result) => {
        console.log(result);
    });


}());
