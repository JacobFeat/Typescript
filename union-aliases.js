"use strict";
(function () {
    function combine(input1, input2, resultConversion) {
        let result;
        if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
            result = +input1 + +input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    const combinedAges = combine(13, 23, 'as-number');
    const combinedAgesText = combine('13', '23', 'as-number');
    const combinedNames = combine("John", "Andy", 'as-text');
    console.log(combinedAges);
    console.log(combinedAgesText);
    console.log(combinedNames);
}());
