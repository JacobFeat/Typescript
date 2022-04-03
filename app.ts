(async function () {

    let userInput: unknown;
    let userName: string;

    userInput = 4;
    userInput = "John"

    if (typeof userInput === "string") {
        userName = userInput;
    }

    function generateError(message: string, code: number) {
        throw { message: message, errorCode: code };
    }

    // generateError("Error detected!", 500);


}());
