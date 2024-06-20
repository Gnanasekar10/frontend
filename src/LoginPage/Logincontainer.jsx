
import { useEffect, useState } from "react";
import MainPage from "../SwitchPageCodes/MainPage";
import AuthContext from "../context/AuthContext";
import Signupcontainer from "../SignUp-Page/Signupcontainer";
// import Welcomecontainer from "../Welcome-Page/Welcomecontainer";
import Welcomecontainer from "../Welcome-Page/Welcomecontainer";

function Logincontainer() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);
    const [signup, setSignup] = useState(false);
    const [back, setBack] = useState(false);

    function handleSubmit() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": username,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://back-end-blond-three.vercel.app/user/sign-in", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.status) {
                    setAuth(true);
                }else{
                    alert(result.msg);
                }
            })
            .catch((error) => console.error(error));
    }

    if (auth) {
        return (
            <AuthContext.Provider value={[auth, setAuth]}>
                <MainPage />
            </AuthContext.Provider>
        );
    }

    function handleClick2() {
        setSignup(true);
    }
    if (signup) {
        return <Signupcontainer />
    }

    function handlClick3() {
        setBack(true);
    }
    if (back) {
        return <Welcomecontainer />
    }

    return (
        <div className="login-container">
            <div className="login-section">
                <h1 style={{color:" rgba(141, 9, 202, 0.64)"}}><span style={{color:"rgba(17, 196, 241, 0.69)"}}>L</span>OGIN</h1>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />
                <a>
                    <button onClick={handleSubmit}>Sign In</button>
                </a>
                <br />
                <p>Dont't Have An Account ?</p>
                <div onClick={handleClick2}>Sign up</div>
                <br />
                <br />
                <div onClick={handlClick3}>
                    <button>Go Back</button>
                </div>
            </div>
        </div>

    );
}

export default Logincontainer;
