import { Link } from "react-router-dom"
import React from "react"
import '.landing.css';


function Landing() {



return(

    <>
<section className="home">
</section>
<div style={{height: "1000px"}}>
</div>

  <container id="carousel_container">
  <div className="carousel">
      <ul className="panes">
        
        <li id="s1">
          <img src="../Media/Photos/kang.png" alt= "kang" />   
          <div className="content">
              <h5 className="head">WELCOME TO THE MADNESS</h5>
          </div>
        </li>
          
        <li id="s2">
          <img src="../Media/Photos/killmonger.png" alt="killmonger"/>
          <div className="content">
          <h5 className="head">NO LONGER APPLY</h5>
          </div>
        </li>
          
        <li id="s3">
          <img src="../Media/Photos/phaser.png" alt="phaser"/>
          <div className="content">
          <h5 className="head">AND GOOD & EVIL</h5>
                </div>
        </li>
          
        <li id="s4">
          <img src="../Media/Photos/loki.png" alt="loki"/>
          <div className="content">
          <h5 className="head">WHEN THE MULTIVERSE OPENS</h5>
          </div>
        </li>
          
        <li id="s5">
          <img src= "../Media/Photos/wv.png" alt="scarletwitch"/>
          <div className="content">
          <h5 className="head">WHERE DO YOU STAND?</h5>
          </div>
        </li>
      </ul>
    </div>
  </container>
  
  <div className="flex-container" id="narr_section">
    <div className="narr_one">
      <h1 id="txt_one">DISARRAY HAS ARRIVED ON EARTH 616 </h1>;

      <div id="txt">
      <p className="narrative_details">
       A SERIES OF RECENT VARIANT-DIVERGENT ACTIVITIES HAVE LED TO A COMPLETE
       SHATTERING OF THE MULTIVERSE. REALITY AS WE KNOW IT HAS BEEN SHREDDED.
       OUR REALITY IS FLOODED WITH VARIANTS FROM ACROSS THE MULTIVERSE.
       VARIANTS READY TO ELIMIATE ANYONE STANDING IN THE WAY OF THEIR CONTROL OF EARTH 616 AND ALL WHO 
       INHABIT IT. THE HEROES YOU HAVE PREVIOUSLY TURNED TO MAY NOT BE HEROES IN THEIR 
       REALITY. NOT ALL VILLAINS ARE VILLAINS. INSTINCTS ARE NEEDED TO NAVIGATE THIS FISSURE IN THE MULTIVERSE.
       ARE YOU READY?</p>
      <button id="play_button" type="button" to="/team-select">START THE MADNESS</button> 
      </div>
      </div>
        </div>
        </>
);
}

    
 export default Landing;

