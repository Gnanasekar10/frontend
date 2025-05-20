import { useState } from "react";
import Welcomecontainer from "../Welcome-Page/Welcomecontainer";
import SwitchAuthPage from "./SwitchAuthPage";

function AuthPage() {
    const[tab,setTab]=useState('welcome')
    return ( 
        <>
        <SwitchAuthPage tab={tab}/>
        <Welcomecontainer setTab={setTab} />
        </>
     );
}

export default AuthPage;