/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us"];

window.onload = function() {
  //write your code here
  let domainName = document.querySelector("#domainName");
  function generateDomain() {
    let domain = "";

    for (let i = 0; i < 4; i++) {
      switch (i) {
        case 0:
          domain += pronoun[Math.floor(Math.random() * pronoun.length)];
          break;
        case 1:
          domain += adj[Math.floor(Math.random() * adj.length)];
          break;
        case 2:
          domain += noun[Math.floor(Math.random() * noun.length)];
          break;
        case 3:
          domain += extensions[Math.floor(Math.random() * extensions.length)];
          break;
      }
    }

    domainName.innerHTML = domain;
  }

  generateDomain();
};

// let randomPronoun = Math.floor(Math.random() * pronoun.length);
// let randomAdj = Math.floor(Math.random() * adj.length);
// let randomNoun = Math.floor(Math.random() * noun.length);
// let randomExt = Math.floor(Math.random() * extensions.length);

// domainName.innerHTML =
//   pronoun[randomPronoun] +
//   adj[randomAdj] +
//   noun[randomNoun] +
//   extensions[randomExt];
// }
//   generateDomain();
// };
