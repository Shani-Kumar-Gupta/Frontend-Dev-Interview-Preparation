function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}
console.log(sum(1)(2)(3)(4)(5)(6)()); //21


/*
Problem Statement 1: Infinite Currying
Can you write code for this function: multiply(a)(b)(c)....(n)(). This should return the product of all the numbers a*b*c*..*n.
For example, multiply(1)(2)(3)() = 6
console.log(multiply(1)(2)()) // 2 
console.log(multiply(1)(2)(3)()) // 6 
console.log(multiply(1)(2)(3)(4)()) // 24
*/