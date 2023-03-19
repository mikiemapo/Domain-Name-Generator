/* eslint-disable */
// import "bootstrap";
// import "./style.css";

const { apply } = require("file-loader");

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function(domainName) {};
//write your code here

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us"];

for (let i = 0; i < pronoun.length; i++) {
  console.log(i);
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`);
      }
    }
  }
}
// to run put in terminal node app.js
