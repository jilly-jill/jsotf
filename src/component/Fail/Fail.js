

function Fail() {

    return (
    <>
    <section className="home">
    </section>
    <div style={{height: '500px'}}>
  </div>
  <div id="break_for_animation">
    <div className="jumbotron jumbotron-fluid">
            <div className="contain">
                <h2 className="display-4">DEFEAT</h2>
                
                <p className="lead">No amount of training could prepare you<br/>
                for what the Multiverse had in store!</p>
            </div>
        </div>
        </div>
        <div id="try_again">Can You Do This All Day?<br/>
          Prove it.
        <div id ="wrap">
        <button id="button_two" type="button" to='/'>START THE MADNESS</button> 
        </div> </div>


    <div id="audio_section">
        <audio controls autoplay loop>
        <source src="./Media/theme.mp3" type="audio/mpeg"></source>
        </audio></div>
</>
   

    );
}
export default Fail;