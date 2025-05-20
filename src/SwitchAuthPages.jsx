import Homepage from "./Home-Page/Homepage";
import Searchpage from "./Search-Page/Searchpage";
import Librarypage from "./Library-Page/Librarypage";
import Aboutpage from "./About-Page/Aboutpage";


function SwitchAuthPages({ tab, setTab }) {
    switch (tab) {
        case "home":
            return <Homepage setTab={setTab} />

        case "about":
            return <Aboutpage setTab={setTab} />

        case "search":
            return <Searchpage setTab={setTab} />

        case "library":
            return <Librarypage setTab={setTab} />

        default:
            return <Homepage setTab={setTab} />
    }
}

export default SwitchAuthPages;