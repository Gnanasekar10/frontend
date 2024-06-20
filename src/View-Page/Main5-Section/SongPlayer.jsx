import { useState } from "react";
import Homepage from "../../../Home-Page/Homepage";

function SongPlayer() {
    const [back,setBack]=useState(false);

    function handleClick() {
        setBack(true)
    }

    if(back){
        <Homepage />
    }

    return (
        <div className="song-player-section">
            <div className="song-template" />
            <br />
            <div className="song-name">
                <p>
                    <marquee direction="" scrollamount={3}>
                        Song Name Goes Here
                    </marquee>
                    <br /> Singer Name Goes Here
                </p>
            </div>
            <br />
            <div className="song">
                <audio src="" controls />
            </div>
            <br />
            <br />
            <a href="./index.html">
                <button onClick={handleClick}>Go BACK</button>
            </a>
        </div>

    );
}

export default SongPlayer;