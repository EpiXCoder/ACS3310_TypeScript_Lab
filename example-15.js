// This function returns a function that returns a string
// Add the types: 
function sayHello2() {
    return function () { return 'Hello!'; };
}
// This variable contains a function that returns a string
var hello2 = sayHello2();
// Calling the function returns the string
console.log(hello2()); // Hello!
console.log(hello2()); // Hello!
console.log(hello2()); // Hello!
console.log(hello2()); // Hello!
function mathematizer2(n) {
    var sum = n;
    return function (x) { return x * n; };
}
var m2 = mathematizer2(3);
console.log(m2(3)); // 9
console.log(m2(2)); // 6
console.log(m2(10)); // 30
console.log(m2(111)); // 333
