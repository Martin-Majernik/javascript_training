console.log('start');
/* 1.  Call backs sp iba funkcie, ktoré su poslané do definovania funkcie ako parameter a spustí sa neskôr  */
/* 2.  () => {}  toto zavolá callback , a zavolám ju pri volaní funkcionality a jej parametri  */

function loginUser(email, password, callbackMy) {
  setTimeout(() => {
    console.log('Now we have data avaiable');
    // callback({userEmail: email}) // 3. tzn že teraz preposielam userEmail ak parameter do funckie callbackMy (callback) ktoru volam naspat dole v const user
    callbackMy({ userEmail: email }); // volám funkciu callbackMy(),  objekt, userEmail bude nastavený na  email,  ktorý dostaneme
  }, 2000); // callbackMy sa zavolá po 2s. preto - to je to čo potrebujem takto sa mi vratia infomrácie
}

function getUserVideos(email, callbackMy) {
  setTimeout(() => {
    callbackMy(['video1', 'video2', 'video2']);
  }, 2000);
}

function videoDetails(video, callbackVideo) {
  setTimeout(() => {
    callbackVideo('Title of the video');
  }, 2000);
}

// 3. volanie hore vytovrených funkci pomocou callbackou:
//                           email,       password, 4. callback
const user = loginUser('devedf@goomail.com', 1234, (myUser) => {
  // tu ako parameter do callbacku dám to čo chcem znova zavolať. zavolá sa mi tam odznova cela const user ZMENA, asi nie, čo je vlastne myUser
  console.log(myUser); // calbackMy: { userEmail: 'devedf@goomail.com' }
  getUserVideos(myUser.userEmail, (videos) => {
    // what, toto som necakal ze tam mozem poslat nejake videos, ktoré ani neexistuje, hore user áno, čo je videos?
    console.log(videos); // to je branné ako item ?  calbackMy:[ 'video1', 'video2', 'video2' ]
    // Tak toto je uplny MINDFUCK :D
    videoDetails(videos[0], (test) => {
      // callbackVideo: Title of the video
      console.log(test);
    });
  }); // do funkcie getUserVideos môzem vythoavat infomracie preposielanoé ako parameter do loginUser ????? to je pre mna novinka, asi kvôli otmue ze to je v jednej konštnate- aha ano presne pretoze  to je uz ulozene v konstant user a ja sa odkazujem na data user.userEmail
});

console.log(user); // info este neprisla zo servera (čaká 5s ) preto vrati undefined

/* setTimeout(() => {
    console.log('setTimeout runnded just now');  
}, 5000); */

console.log('End');

/* ============================ */
// tu je defin funkcia, kt bude volať callack ako parameter
function processUserInput(callback) {
  // const name = "Martin"
  callback('Martin');
}

// tu je definovaná callback funkcia
function greeting(name) {
  console.log(`Hello ${name}`);
}

processUserInput(greeting); // greeting  je callback
