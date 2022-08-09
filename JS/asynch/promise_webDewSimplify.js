const p = new Promise((resolve, reject) => {
  // porovnávam to čo mám v danom pomise danej funkcie
  const a = 3 + 1;
  // eslint-disable-next-line eqeqeq
  if (a == 2) {
    resolve('Success');
  } else {
    reject(new Error('Failed'));
  }
});

// I'm going to give you the best video ever on promises "then" "you are going to do something else"
// takze do "then davame parameter to čo je v result" "v danej funkcii v jej promise"
p.then((message) => {
  console.log(`This is in the then ${message}`);
}).catch((message) => {
  console.log(`This is in the then ${message}`);
});
// takze do .catch davame parameter to čo je v reject v danej funkcii v jej promise
// túto čast chápem, ale z tohto velkeho promisu som v prdeli
