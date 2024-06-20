import { useEffect, useState } from "react";
import SwitchSongs from "../../SwitchSongs/SwitchSongs";
import Playlists2 from "./Playlists2";
import Songplay2 from "./Songplay2";
import Songs2 from "./Songs2";




function Main2() {
    const [songObj, setSongObj] = useState({});

    return (
        <div className="main-02">
            <Songs2 setSongObj={setSongObj}></Songs2>
            <h2 className="playlist-h2">Playlists</h2>
            <Playlists2></Playlists2>
            <Songplay2 songObj={songObj}></Songplay2>
            <SwitchSongs />
        </div>
    );
}

export default Main2;