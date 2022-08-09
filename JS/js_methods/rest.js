/* eslint-disable no-console */
// Rest operator
// sa využiva pri defin. funkcie
// way to "work with" an "indefinite quantity of parameters", so "you can call a function" "with an unspecified number of arguments", no matter how it can be defined.
// You will include the rest of the parameters in the function definition using three dots

// ? For Example: toto vezme iba prvé dva parametre
function multiply(x, y) {
  return x * y;
}
console.log('result:', multiply(1, 2, 3, 4, 5));
// only the first two are counted in the output.

// Preto pouzijeme Rest operator
// 1.
function multiplyAll(...restParam) {
  let result = 1;
  // eslint-disable-next-line no-restricted-syntax
  for (const arg of restParam) {
    result *= arg; // result = result * arg  1*4 = 4 , 4*3= 12
    console.log('result:', result);
  }
  return result;
}
// console.log(multiplyAll(1)); // 1
console.log(multiplyAll(4, 3, 2));

// ? rest parameters should be at the end. As they gather all the remaining arguments
// 2.
function welcomeSite(siteName, bookName, ...bookTitles) {
  console.log(` Welcome to ${siteName}’s ${bookName} book`);
  // the rest go into bookTitles array
  console.log(bookTitles[0]);
  console.log(bookTitles[1]);
  console.log(bookTitles.length);
}
welcomeSite('W3Docs', 'JS', 'Arrays', 'Functions');

// vyskušam si to este raz:
// 3.
function testOfRestParam(firstP, secondP, ...restP) {
  const lines = restP.map((item) => {
    const tdt = ` ${item}`; // template literal
    return tdt;
  });
  // return lines;

  console.log(
    `This is my first name ${firstP}, and this is my last name ${secondP}, I m focusing on ${lines}` // automaticky sa za tým doplni čiarka, je to kvôli tomu že je to pole ? [ 'JS', 'TS', 'React.js' ]
  );
  console.log([...restP]); // ==   console.log(restP);
  console.log(...restP);
}
testOfRestParam('Martin', 'Majernik', 'JS', 'TS', 'React.js', 'CSS');
