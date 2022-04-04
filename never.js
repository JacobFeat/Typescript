"use strict";
let userInput;
let userName;
userInput = 4;
userInput = "John";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const a = 2;
// generateError("Error detected!", 500);
