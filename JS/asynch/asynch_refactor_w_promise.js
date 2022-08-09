/* eslint-disable no-unused-vars */
console.log('start');
/* 1.  Call backs sp iba funkcie, ktoré su poslané do definovania funkcie ako parameter a spustí sa neskôr  */
/* 2.  () => {}  toto zavolá callback , a zavolám ju pri volaní funkcionality a jej parametri  */

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('CONSOLE LOG from loginUser, Now we have data avaiable');
      // callback({userEmail: email}) // 3. tzn že teraz preposielam userEmail ak parameter do funckie callbackMy (callback) ktoru volam naspat dole v const user
      // if we get a resolve back then we use resolve:
      resolve({ userEmail: email }); // volám funkciu callbackMy(),  objekt, userEmail bude nastavený na  email,  ktorý dostaneme
    }, 2000); // callbackMy sa zavolá po 2s. preto - to je to čo potrebujem takto sa mi vratia infomrácie
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if we get a resolve back then we use resolve:
      console.log('CONSOLE LOG from getUserVideos');
      resolve(['video1', 'video2', 'video2']); // user[0] || user.map(item => item)
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if we get a resolve back then we use resolve:
      // console.log("This is test message if it will log both messages log and resolve");
      console.log('CONSOLE LOG from videoDetails');
      resolve(`Title of the videoOO +  ${video}`);
    }, 2000);
  });
}
// 1. v reale tieto promisi nebudem musiet ani písať, pretoze request mi vrati promise automaticky,
/* loginUser("Martin", 'Majerník')
.then(user => console.log(user)) */

// 2.
/* // I'm going to give you the best video ever on promises "then" "you are going to do something else"
loginUser("Martin", "Majernik")
  .then(
    (user) => getUserVideos(user),
    console.log(getUserVideos(user.email))
  )
  .then((item) => videoDetails(item[0])) // , console.log(videoDetails(item[0]))  // čo mi vráti tento then a funkcia v nom ?
  /item je všetko to čo sa nachádza v promise
  .then((detail) => console.log("detail:", detail)); //(user => console.log(user)).then(item => videoDetails(item.email))
 */
//! Výsledok :
/*
  Now we have data avaiable
  detail: Title of the video  , ako som dostal udaje z inej funckie volané parametrom
  */
/*
  // 3. as son as I get usert I also want t oget the Video details from videoDetails()
loginUser("Martin", 'Majerník')
.then(user => getUserVideos(user))
.then(user => console.log(user))  //  vratilo promise z getUserVideos : [ 'video1', 'video2', 'video2' ]
.then((item) => videoDetails(item)) // vratilo console log z videoDetails:This is test message if it will log both messages log and resolve
.then((item) => console.log(item)) //  vratilo promisez videoDetails Title of the videoOO

  // 4.
  loginUser("Martin", 'Majerník')
.then(user => getUserVideos(user))
.then(user => videoDetails(user[0]))
.then(user => console.log(user))
console.log("Finish");

 */

// SYNC - podme vytvorit na ot funkciu
// 1. takto to nefunguje: vyhodí ERROR
/*
function displayUser() {
    const loginUserAwait = loginUser( "Martin", 12345). // nevrati mi conosle lo kt je v loginUser
}
displayUser()
*/

// 2. musim pridat async/await
async function displayUserAsync() {
  const loginUserAwait = await loginUser('Martin', 12345); // ths will print only console log
  console.log(
    'this CONSOLE LOG wil print promise inside loginUser:',
    loginUserAwait.userEmail
  );
  const videosAwait = await getUserVideos(loginUserAwait.userEmail);
  console.log(
    'this CONSOLE LOG wil print promise (array of videos) inside getUserVideos:',
    videosAwait
  );
  const detailAwait = await videoDetails('STAR WARS');
  console.log(
    'this CONSOLE LOG wil print promise inside videoDetails:',
    detailAwait
  );
}
displayUserAsync();

// 3. v prípade že chce pouiť aj error - reject tak použijem:
// try {} catch(error){ }
async function displayUserAsyncNew() {
  try {
    const loginUserAwait = await loginUser('Martin', 12345); // ths will print only console log
    console.log(
      'this CONSOLE LOG wil print promise inside loginUser:',
      loginUserAwait.userEmail
    );
    const videosAwait = await getUserVideos(loginUserAwait.userEmail);
    console.log(
      'this CONSOLE LOG wil print promise (array of videos) inside getUserVideos:',
      videosAwait
    );
    const detailAwait = await videoDetails('STAR WARS');
    console.log(
      'this CONSOLE LOG wil print promise inside videoDetails:',
      detailAwait
    );
  } catch (err) {
    console.log(' WO could not load data');
  }
}
displayUserAsyncNew();
console.log('END');
