// 3 simple promises :

// 1
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

// 2
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

// 3
const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// chcem zbehnut všetky naraz postupne
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

//  Promise.race runs as soon as the first promise is compleated instead of waiting for everything to complete
/* Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })  */
