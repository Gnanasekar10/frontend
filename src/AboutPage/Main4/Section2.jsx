import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Section2() {
    const [auth, setAuth] = useContext(AuthContext);
    return (
        <div className="section-02">
            <p>User Name</p>
            <br />
            <p>Notifications</p>
            <p>Connected Services</p>
            
            <p># Your Tag 01 # Your Tag 02</p>
            <button className="sec2btn">Edit</button>
            <button className="sec2btn" onClick={() => setAuth(false)}>Log Out</button>
        </div>

    );
}

export default Section2;