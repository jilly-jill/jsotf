
//define user and cpu
const user = {
    "health": 100,
    "team": userTeam,
    "isPlaying": false
  }
  
  const cpu = {
    "health": 100,
    "team": cpuTeam,
    "isPlaying": true
  }
  
  
  //call function then loop while in play
  fight(userTeam, cpuTeam);
  
  while (user.isPlaying === true && cpu.isPlaying === true) {
      fight(user.team, cpu.team)
  }
  // onClick rollDiceHandler
  document.getElementById("roll").addEventListener("click", rollDice());

  
  function rollDice() {
      
        let randomNumber = function(low, high) {
          return Math.floor( Math.random() * (1 + high - low) ) + low;
        };
        document.getElementById("cube").setAttribute("class",`show-${randomNumber}`);

        
        const messages = [
          'A T T A C K ! -1',
          'Martial Arts Kick! -2',
          'Weaponed Summoned! -3',
          'Combo Punches -4',
          'Dart Attack -5',
          'Lightning bolt succeeded -6',
          'Landing Stomp -7',
          'Heat Blast -8',
          'Ebony Blade Cut -9',
          'We Could Do This All Day." -10',
          'Lets Get Nuts! -11',
          'Level 3 HYPER COMBO! -12',
          'Tell Us: Do You Bleed? You Will." -13',
          'Throws a Car!  -14',
          'Throws a Train! -15',
          'Dual Attack -16',
         'S.H.E.I.L.D. fires all airship cannons  -17',
          'Army Uses Predator Drone! -18',
          'Punched With Infinity Stone!! -19',
          'T E A M  A S S E M B L E S -20'
        ];
        alert(messages);
  }
  
  export default rollDice()
  ;