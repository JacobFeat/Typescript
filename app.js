(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    function printResult(num) {
        console.log("Result: ".concat(num));
    }
    printResult(add(2, 3));
    // let combineValues: Function;
    var combineValues;
    combineValues = add;
}());
