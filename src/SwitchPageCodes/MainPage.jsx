import { useState } from "react";
import Footer1 from "../Home-Page/Footer1-Section/Footer1";
import SwitchMainPage from "./SwitchMainPage";

function MainPage() {
    const [tab, setTab] = useState('')

    return (
        <>
                <SwitchMainPage tab={tab} />
                <Footer1 setTab={setTab} />
        </>
    );
}

export default MainPage;    