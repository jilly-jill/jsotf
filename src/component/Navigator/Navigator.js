import {Link} from 'react-router-dom';
import './navigator.css';

function Navigation() {
 
    return(
        <><header>
            <div>
                <nav className="nav">
                    <div className="container">
                        <div className="logo">
                            <Link className='gm_logo' src="../Media/Photos/logo.png" to='https://github.com/jilly-jill/marvel-defiance-multiverse-madness'></Link>        
                        </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><Link to="/team-selection">Start the Madness</Link></li>
                            <li><Link to="/">What Madness?</Link></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
                </nav>
        
        <section className="home">
        </section>
        <div style="height: 1000px">
            </div>
            <container id="carousel_container">
                <div className="carousel">
                    <ul className="panes">
                        <li id="s1">
                            <img className="kang"  src="../Media/Photos/kang.png"/>
                                <div className="content">
                                    <h5 id="head">WELCOME TO THE MADNESS</h5>
                                </div>
                        </li>
                        <li id="s2">
                            <img className="killmonger" src= "../Media/Photos/killmonger.png"/>
                                <div className="content">
                                <h5 className='h5_head'>NO LONGER APPLY</h5>
                                </div>
                        </li>
                        <li id="s3">
                            <img className="phaser" src="../Media/Photos/phaser.png"/>
                                <div className="content">
                                <h5 className='h5_head'>AND GOOD & EVIL</h5>
                                </div>
                        </li>

                        <li id="s4">
                            <img className="loki" src="../Media/Photos/loki.png"/>
                                <div className="content">
                                <h5 className='h5_head'> WHEN THE MULTIVERSE OPENS</h5>
                                </div>
                            </li>

                        <li id="s5">
                            <img className="wandaVision" src="../Media/Photos/wv.png"/>
                            <div className="content">
                            <h5 className='h5_head'> WHERE DO YOU STAND?</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </container>
                
            <div className="flex-container" id="narr_section">
                <div className="narr_one">
                    <h1 id="txt_one">DISARRAY HAS ARRIVED ON EARTH 616 </h1>;
                
                <div id="txt">
                    <p id="setupStory">
                        A SERIES OF RECENT VARIANT-DIVERGENT ACTIVITIES HAVE LED TO A COMPLETE
                        SHATTERING OF THE MULTIVERSE. REALITY AS WE KNOW IT HAS BEEN SHREDDED.
                        OUR REALITY IS FLOODED WITH VARIANTS FROM ACROSS THE MULTIVERSE.
                        VARIANTS READY TO ELIMIATE ANYONE STANDING IN THE WAY OF THEIR CONTROL OF EARTH 616 AND ALL WHO
                        INHABIT IT. THE HEROES YOU HAVE PREVIOUSLY TURNED TO MAY NOT BE HEROES IN THEIR
                        REALITY. NOT ALL VILLAINS ARE VILLAINS. INSTINCTS ARE NEEDED TO NAVIGATE THIS FISSURE IN THE MULTIVERSE.
                        ARE YOU READY?    
                    </p>
                    <button id="play_button" type="button">START THE MADNESS</button>
                </div>
            </div>
           </div>
          </div>
        
        <div id="audio_section">
        <audio controls autoplay loop>
          <source src="./Media/theme.mp3" type="audio/mpeg"></source>
        </audio></div>
        </header>
        </>
    );

}
export default Navigation;