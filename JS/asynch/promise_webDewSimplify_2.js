/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
// example of somtehing that uses callacks which is what promises are meant to replace , and replace them with promises
// Callback function : berie 2 callbacky, jeden for succes, durhy for failer, tato funkcia iba checkuje 2 variables ci su pravdeivé / nepravdivé
function watchTutorialCallback(callback, errorCallback) {
  const userLeft = false;
  const userWatchingCatMeme = false;

  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':(',
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat',
    });
  } else {
    callback('Thumbs up and Subscribe');
  }
}

// další krok je to ze ju zvaoláme dáme jej nase 2 callbacky
// 1. callback message => { console.log(message) }, // ak bude ho vo funkcii pravda calback tak mi vrati log message Thumbs up and Subscribe
// 2. callback error => { console.log(error.name + ' ' + error.message) })
watchTutorialCallback(
  (everythingInsideCallback) => {
    console.log(`Success: ${everythingInsideCallback}`); // 2. spôsob zápisu bez template literalu: ('Success:' + everythingInsideCallback)
  },
  (error) => {
    // eslint-disable-next-line prefer-template
    console.log(error.name + ' ' + error.message); // template literal
  }
);
// potrebujem eslint a prittier na save

// Promise function :
// in Promise function we dont have parameters-calbacks
function watchTutorialPromise() {
  const userLeft = false;
  const userWatchingCatMeme = true;
  //  resolve will be successful callback
  //  reject will be unsuccessful callback
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat',
      });
    } else {
      resolve('Thumbs up and Subscribe');
    }
  });
}

// rozdiel oproti callbak funckii je o ze to neberie ziadne parametre,
// a cele to čo bolo pri volaní parametro este zaobalim do .then a .catch
watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(`${error.name} ${error.message}`);
  });
