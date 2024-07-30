/* Question 1 */
var foo = 1;

(function() {
    console.log(foo);
    var foo = 2;
    console.log(foo);
})();

console.log(foo);

/* Answer: undefined 2 1
Key Concept Involved:
1. Hoisting
2. Function Scope
3. Global vs Local Variable
4. IIFE
*/

/* Question 2 */
function foo() {
  console.log(bar); // undefined
  bar = 10;
  console.log(bar); // 10
  var bar = 20;
  console.log(bar); // 20
}

foo();

/* Question 3 */
console.log(foo); // undefined
console.log(bar); // bar() fn

var foo = function() {
    console.log("Hello");
};

function bar() {
    console.log("World");
}

console.log(foo); // fn
console.log(bar); // bar fn

/* Question 4 */
console.log(a); // undefined
console.log(b); // Reference error: Cannot access before initialization

var a = 10;
let b = 20;

console.log(a); // 10
console.log(b); // 20

/* Question 5 */
foo(); // Type Error: foo is not a function
bar(); // bar

var foo = function() {
    console.log("foo");
};

function bar() {
    console.log("bar");
}

/* Question 6 */
function outer() {
  console.log(a); // undefined
  function inner() {
      console.log(a); // undefined
      var a = 10;
      console.log(a); // 10
  }
  var a = 5;
  inner();
  console.log(a); // 5
}

outer();

