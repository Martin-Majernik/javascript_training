// import fetch from "node-fetch";
// import fetch from 'cross-fetch';
// import 'cross-fetch/polyfill'

// const fetch = require("node-fetch");
const fetch = require('cross-fetch');

// predtým ked sme robili http requesty , používali sme xml http requesty, stále sa používajú ale je už lepší spôsob zápisu : FETCH API - je to uz v vstavané do JS , vyžaduje menej kodu

// let file = "/Users/Shared/Files From c.localized/Martin/Webrebel 1- HTML, CSS, JS/NOVÉ PROJEKTY OD 7.10/JS_Section/Vanila_JS_Section/App/JS/asynch/public/text.json"  //"public/text.txt"
const file = 'public/text.txt';
// const  file = "public/text.txt"

fetch(file)
  .then((response) => {
    console.log(' Succes response', response);
  })
  .catch((err) => {
    console.log('Unsucces response', err);
  });
