import React from "react";

function MusicPlayer(){

    return(

        <audio controls autoplay loop>
        <source className="audio_player" src="./Media/theme.mp3" type="audio/mpeg"></source>
        </audio>
      
    );
}
export default MusicPlayer;