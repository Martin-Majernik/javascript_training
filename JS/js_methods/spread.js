/* eslint-disable no-console */
// Spread operator sa využiva pri volaní funkcie
// 1.     ...1, 2, 3
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
//                                  1, 2, 3
console.log('sum(...numbers):', sum(...numbers)); // spread musim pouzit len v parametri ked volám funkciu - rozlozi
// expected output: sum: 6

//! ked chcem spread použiť do koštanty musim takto :
const spreadNumberss = [...numbers];

console.log('spreadNumberss:', spreadNumberss); // output spreadu nie je vzdy array [ 1, 2, 3 ]
//                                       [ 1, 2, 3 ]
console.log('sum(spreadNumberss):', sum(spreadNumberss)); // spread musim pouzit len v parametri ked volám funkciu
// sum(spreadNumberss): 1,2,3undefinedundefined

console.log('sum(...spreadNumberss):', sum(...spreadNumberss));
// sum(...spreadNumberss): 6

// 2.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log('numbersCombined:', numbersCombined);
// numbersCombined: [ 1, 2, 3, 4, 5, 6 ]

console.log('...numbersCombined:', ...numbersCombined);
// ...numbersCombined: 1 2 3 4 5 6

console.log('...numbersCombined:', [...numbersCombined]);
// [...numbersCombined]: [1 2 3 4 5 6]

console.log('sum(numbersCombined):', sum(numbersCombined));
// sum(numbersCombined): 1,2,3,4,5,6undefinedundefined
console.log('sum(...numbersCombined):', sum(...numbersCombined)); // [ 1, 2, 3, 4, 5, 6 ]
// sum(...numbersCombined): 6   , vezme len tie 3 prvé indexy podla funkcie sum (x,y,z)
console.log(
  'sum(...numbersOne, ...numbersTwo)',
  sum(...numbersOne, ...numbersTwo)
);
// sum(...numbersOne, ...numbersTwo): 6 // vezme len tie 3 prvé indexy
console.log('sum(...numbersOne)', sum(...numbersOne));
// sum(...numbersOne): 6

// bez spreadu
console.log('sum( numbersOne)', sum(numbersOne));
// sum( numbersOne) 1,2,3undefinedundefined

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
};
//* myslel by som si ze mi vrati jeden array s 2 objektmi, ale vrati mi jeden objekt, aháá ked je to array tak [], ked obejkt tak {}
console.log('spread 2 objects, ', { ...myVehicle, ...updateMyVehicle });

// allows us to copy all/part of an existing "array" [] or "object" {} into another "array" [] or "object" {}
// When we invoke the function, we pass it all the values in the array/object using the spread syntax and the array name — ...numbers.
// zero or more arguments (for function calls) or elements (for array literals) are expected,
