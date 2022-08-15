function prepend(numSpaces, inputString) {
    var result = "";
    var emptySpace = " ";
    for (var i = 0; i < numSpaces; i++) {
        result += emptySpace;
    }
    return result + inputString;
    // your code here
}
var result = prepend(3, "Sercan");
console.log(result);
