var greeter = 'hey hi';
var times = 4;

if (times > 3) {
  var greeter = 'say Hello instead';
}

console.log(greeter); // "say Hello instead"

/* 
So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.
If you have used greeter in other parts of your code, you might be surprised at the output you might get. 
*/
//* This is why let and const are necessary.

// let is block scoped
// So a variable declared in a block with let  is only available for use within that block:
let greeting = 'say Hi';
let times = 4;

if (times > 3) {
  let hello = 'say Hello instead';
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined

/* ----------------------- */
// 3. Updating variable var :
var greeter = 'hey hi';
console.log('1 time:', greeter); // 1 time: hey hi
greeter = 'say Hello instead';
console.log('2 time:', greeter); // 2 time: say Hello instead

// 4. Re-declaring variable var
var greeter = 'hey hi';
var times = 4;
if (times > 3) {
  var greeter = 'say Hello instead';
}
console.log(greeter); // "say Hello instead"

/* ----------------------- */

// 5. Updating variable let :
// let can be updated but not re-declared
// like var,  a variable declared with let can be updated within its scope
let greeting = 'say Hi';
greeting = 'say Hello instead';

// 6. Re-declaring variable let = error
//Unlike var, a let variable cannot be re-declared within its scope
let greeting = 'say Hi';
let greeting = 'say Hello instead'; // error: Identifier 'greeting'

// but if the same variable is defined in different scopes, there will be no error: "Let is block scoped"
// When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.

// 7. CONST
// maintain constant values. const declarations share some similarities with let declarations.

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.
// Every const declaration, therefore, must be initialized at the time of declaration.

// Ale neplatí to pre propertiies objektu const This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

const greeting = {
  message: 'say Hi',
  times: 4,
};
// we can do this:
greeting.message = 'say Hello instead';

//while we cannot do this:
greeting = {
  words: 'Hello',
  number: 'five',
}; // error:  Assignment to constant variable.
