"use strict";
(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    function andAndHandle(n1, n2, cb) {
        const result = n1 + n2;
        cb(result);
    }
    function printResult(num) {
        console.log(`Result: ${num}`);
    }
    printResult(add(2, 3));
    // let combineValues: Function;
    let combineValues;
    combineValues = add;
    const addedValues = andAndHandle(4, 2, (result) => {
        console.log(result);
    });
}());
