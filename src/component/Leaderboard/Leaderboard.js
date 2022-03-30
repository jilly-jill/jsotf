const username = require('win');
const {userTeam , cpuTeam} = require('fight');

// grab the user.name field (from /Win) and create html element for it to append

//name ,  team,  enemies


const username = username;
userTeam= user.team;
cpuTeam = cpu.team;

console.log(user.team);
console.log(userTeam);
console.log(cpuTeam);


// Dynamically add to leaderboard 
/* <tr>
      <th scope="row">PASS</th>
        <td>Larry Bird</td>
          <td>Magic Johnson</td>
          <td>Michael Jordan</td>
        </tr> */
        //Append to tbody


function Leaderboard() {
  const newRow = document.createElement("tr");
  const column1 = document.createElement("th");
  column1.setAttribute("scope", "row");
  column1.innerText = username;
  newRow.appendChild(column1);
  
  
  const column2 = document.createElement("td");
  column1.innerText = userTeam[0];
  newRow.appendChild(column2);
  
  const column3 = document.createElement("td");
  column1.innerText = userTeam[1];
  newRow.appendChild(column3);
  
  const column4 = document.createElement("td");
  column1.innerText = userTeam[2];
  newRow.appendChild(column4);
  
  
  const column5 = document.createElement("td");
  column1.innerText = "Victors";
  newRow.appendChild(column5);
  
  
  const tbody = document.getElementById("tbody");
  tbody.appendChild(newRow);



return (
    <>
    <img className= "logo" src="../Media/Photos/logo.png"/>
    <h2 id="header">Leaderboard</h2>
    <table className="table table-hover table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Player 1</th>
          <th scope="col">Player 2</th>
          <th scope="col">Player 3</th>
          <th scope="col">Victors</th>
        </tr>
      </thead>

      <tbody id="tbody">
        <tr>
          <th scope="row">user1</th>
          <td>Hulk</td>
          <td>SpiderMan</td>
          <td>Captain America</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user2</th>
          <td>Wonder Woman</td>
          <td>Captain Marvel</td>
          <td>3-D Man</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user3</th>
          <td>Doctor</td>
          <td>Wanda Maximoff</td>
          <td>Wong</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user4</th>
          <td>Absorbing Man</td>
          <td>Ace</td>
          <td>Aero</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user5</th>
          <td>Agent Mobius</td>
          <td>Andrea</td>
          <td>Yo-yo</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user6</th>
          <td>Zephyr</td>
          <td>Zeus</td>
          <td>Wizard</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user7</th>
          <td>Yankee Clipper</td>
          <td>Votan</td>
          <td>Vulcan</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user8</th>
          <td>War Machine</td>
          <td>Spiderman</td>
          <td>Wanda</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user9</th>
          <td>Wasp</td>
          <td>Venom</td>
          <td>Vex</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user10</th>
          <td>Vamp</td>
          <td>Venom</td>
          <td>Veil</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user11</th>
          <td>Typhon</td>
          <td>The Watcher</td>
          <td>U.S. Agent</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user12</th>
          <td>Tyrant</td>
          <td>Uncle Ben</td>
          <td>Titan</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user13</th>
          <td>Black Lighting</td>
          <td>The Thing</td>
          <td>The Locust</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user14</th>
          <td>Thing</td>
          <td>Thor</td>
          <td>Thunderbird</td>
          <td>Victors</td>
        </tr>
        <tr>
          <th scope="row">user15</th>
          <td>Thanos</td>
          <td>The Captain</td>
          <td>Surtur</td>
          <td>Victors</td>
        </tr>
      </tbody>
    </table>

</>
)
;}

export default Leaderboard;