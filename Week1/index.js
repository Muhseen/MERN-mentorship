//Eercise 1
//basic types and functions
var myName = "Abdulsalam, Muhsin Ahmad";
var myAge = 30;

function introduce(name, age) {
    return "Hello, ".concat(name, ", How does being ").concat(age, " feel?");
}
console.log(introduce(myName, myAge));
//Exercise 2
///Basic function for prime number check in TS
// Algo: Get the root of the number and ceil it to the upper whole number
//check if any of the values <= root are factors of the numbe, if any is, it is not a prime number, else, it is  
function isPrimeNumer(val) {
    //
    if (val < 0) {
        throw Error("Please provide a value higher that 2");
        return false;
    }
    if (val <= 2)
        return false;
    var root = Math.ceil(Math.sqrt(val));
    for (var i = 2; i <= root; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumer(11));
console.log(isPrimeNumer(200));
//Exercise 3 Basic Array Sorting and Manipulation
var Names = ['Adam', 'Joe', "Muhsin", 'Eren', "Tony", "Mark"];
Names.sort();
console.log("Sorted Values in The array");
console.log({ Names: Names });
Names.reverse();
console.log({ Names: Names });
//Traversing the arrays
Names.forEach(function(name) {
    console.log("Hello ".concat(name, ", it is nice to meet you."));
});



//Exercise 4
//Using Types

Type Talent = {
    name: sting
}