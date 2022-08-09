// môzem to spravit bud vo funkcii alebo aj v konštante
// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('got the result / user'); // = result / user
    resolve({ user: 'ed' }); // = result / user
    // reject(new Error("User not logged in"))
  }, 2000);
});

// in "then" are informations- result / user
promise
  .then((user) => {
    // we run then statement, when we get informationq back successfuly
    console.log(user);
  })
  .catch((err) => console.log(err.message)); // we run catch statement when we are not getting information back successfuly
