

function fight(userTeam=user.team, cpuTeam=cpu.team) {
    user.isPlaying = true;

    const cardBody = evt.target.parentElement;

    

    
    // USER TURN
    cpu.health -= randomNumber;  // subtract CPU health

    if (cpu.health < 70 && cpu.health > 50) {
        removeCard("c1");
    } 

    if (cpu.health < 70 && cpu.health < 50) {
        removeCard("c3");
    }

    if (cpu.health <= 0) {
        removeCard("c2")
        cpu.isPlaying = false;
    }
    
    //CPU TURN
    user.health -= randomNumber; // subtract User health
    
    
    if (user.health < 70 && user.health > 50) {
        removeCard("p1");
    } 
    
    if (user.health < 70 && user.health < 50) {
        removeCard("p3");
    }

    if (user.health <= 0) {
        removeCard("p2")
        user.isPlaying = false;
    }

}
export default fight() ;