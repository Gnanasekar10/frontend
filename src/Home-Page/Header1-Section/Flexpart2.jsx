import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Flexpart2() {
    const [auth, setAuth] = useContext(AuthContext);
    return (
        <div className="flex-part1-1">
            <div href="">
                <button className="buttons">Playlists</button>
            </div>
            <div href="">
                <button className="buttons">Songs</button>
            </div>
            <div href="./loginpage.html">
                <button onClick={() => setAuth(false)} className="logout-button">Log Out</button>
            </div>
        </div>

    );
}

export default Flexpart2;