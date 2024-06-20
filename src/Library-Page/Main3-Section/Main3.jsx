import { useEffect, useState } from "react";
import SwitchSongs from "../../SwitchSongs/SwitchSongs";
import Playlists3 from "./Playlists3";
import Songplay3 from "./Songplay3";
import Songs3 from "./Songs3";




function Main3() {
    const [songObj, setSongObj] = useState({});

    return (
        <main>
            <h2 className="playlist-h2">Playlists</h2>
            <Playlists3></Playlists3>
            <Songs3 setSongObj={setSongObj}></Songs3>
            <Songplay3 songObj={songObj}></Songplay3>
            <SwitchSongs />
        </main>
    );
}

export default Main3;