import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import findByName from "./findByName";
import findNameStartsWith from "./findNameStartsWith";
import chooseFighters from "./chooseFighters";



function SelectTeam() 
const cardsSelectp1 = document.getElementById("p1")
const cardsSelectp2 = document.getElementById("p2")
const cardsSelectp3 = document.getElementById("p3")
const cardsSelectc1 = document.getElementById("c1")
const cardsSelectc2 = document.getElementById("c2")
const cardsSelectc3 = document.getElementById("c3")


{

    //Array for a fighter
    var fighterChosenData = {};
    var teamData = [];
    DataTransfer.push(fighterChosenData);

    console.log(teamData);


    // let apiCall = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${md5Digest}`; 
    // const SelectTeamHandler(() => {
    //     axios.get(apiCall )
    // }


//getcharacters




// <body id="bgcolor">
//     <nav class="nav">
//       <div class="container">
//         <div class="logo">
//           <img src="../Media/Photos/logo.png"/> 
//         </div>
//         <div id="mainListDiv" class="main_list">
//           <ul class="navlinks">
//             <!-- <li><a href="#">About</a></li>
//             <li><a href="#">Portfolio</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li> -->
//           </ul>
//         </div>
//         <span class="navTrigger">
//           <i></i>
//           <i></i>
//           <i></i>
//         </span>
//       </div>
//     </nav>
//     <br>
//     <br><br>
//     <div class="container" id="team_selection">
//       <div class="row">
//         <div class="col">
//       <h3 class="center" id="header">Heroes</h3>
//       <hr />
//       <br />
//       <br />
//       <div class="container">
//         <div
//           class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-evenly"
//         >
//           <div class="col">
//             <div id="p1">
//             </div>
//           </div>
//           <div class="col">
//             <div  id="p2"></div>
//           </div>
//           <div class="col">
//             <div id="p3"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="col">
//       <h3 class="center" id="header">Villians</h3>
//       <hr />
//       <br />
//       <br />
//       <div class="container">
//         <div
//           class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-evenly"
//         >
//           <div class="col">
//             <div id="c1"></div>
//           </div>
//           <div class="col">
//             <div id="c2"></div>
//           </div>
//           <div class="col">
//             <div id="c3"></div>
//           </div>
//           </div>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <hr>
//     <div class="container">
//       <h2 class="center" id="header">Selected Players</h2>
//       <div class="row">
//         <div class="col">
//           <div id="finalp1">
//         </div>
//         </div>
//         <div class="col">
//           <div id="finalp2"></div>
//         </div>
//         <div class="col">
//           <div id="finalp3"></div>
//       </div>
//     </div>
//     </div>
//     <div class="footer-dark align-bottom"></div>
}
export default SelectTeam();