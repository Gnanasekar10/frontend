

import { useEffect, useState } from "react";
// import Logincontainer from "../Login-Page/Logincontainer";
import Logincontainer from "../LoginPage/Logincontainer";
// import Welcomecontainer from "../Welcome-Page/Welcomecontainer";
import Welcomecontainer from "../Welcome-Page/Welcomecontainer";

function Signupcontainer() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [login, setLogin] = useState(false);
    const [back, setBack] = useState(false);

    const [count, setCount] = useState(0);

    useEffect(() => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //         "username": username,
    //         "password": password
    //     });

    //     const requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: "follow"
    //     };

    //     fetch("https://back-end-blond-three.vercel.app/user/sign-up", requestOptions)
    //         .then((response) => response.json())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.error(error));
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    
    // const raw = JSON.stringify({
    //   "username": username,
    //   "password": password
    // });
    
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow"
    // };
    
    // fetch("https://backend-project-smoky.vercel.app/song/signup/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
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

fetch("https://severside.vercel.app/song/sign-up", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

    }, [count]);

    function handleClick() {
        setLogin(true);
        setCount(count + 1);
    }
    if (login) {
        return <Logincontainer />
    }

    function handleClick2() {
        setBack(true);
    }
    if (back) {
        return <Welcomecontainer />
    }

    return (
        <div className="signup-container">
            <div className="signup-section">
                <h1>CREATE ACCOUNT</h1>
                <br />
                <label>Username</label>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Email</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <div>
                    <button onClick={handleClick}>Sign Up</button>
                </div>
                <br />
                <p>Already Have Account ?</p>
                <div onClick={handleClick}>Login</div>
                <br />
                <div onClick={handleClick2}>
                    <button>Go Back</button>
                </div>
            </div>
        </div>

    );
}

export default Signupcontainer;
