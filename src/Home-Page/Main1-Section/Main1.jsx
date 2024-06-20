import { useEffect, useState } from "react";
import SwitchSongs from "../../SwitchSongs/SwitchSongs";
import Playlists1 from "./Playlists1";
import Songplay1 from "./Songplay1";
import Songs1 from "./Songs1";




function Main1() {
    const [songObj, setSongObj] = useState({});

    return (
        <main>
            <h2 className="playlist-h2">Playlists</h2>
            <Playlists1></Playlists1>
            <Songs1 setSongObj={setSongObj}></Songs1>
            <Songplay1 songObj={songObj}></Songplay1>
            <SwitchSongs />
        </main>
    );
}

export default Main1;