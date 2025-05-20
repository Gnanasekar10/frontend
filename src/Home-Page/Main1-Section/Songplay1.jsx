import { useRef, useState } from "react";

function Songplay1({ songObj }) {

    // const [player,setPlayer]=useState(false);

    // function handleClick() {
    //     setPlayer(true);
    // }
    // if(player){
    //     return <Viewpage />
    // }
    return (
        <div className="songplay-section">
            <div href="./viewpage.html">
                <div className="song-pic">
                    <img src={songObj.imageUrl} alt="" height={45} width={45} />
                </div>
            </div>
            <div>
                <div className="song">
                    <audio id="audio" src={songObj.audioUrl} controls></audio>
                </div>
            </div>
        </div>

    );
}

export default Songplay1;
