// import Aboutpage from "../About-Page/Aboutpage";
import Aboutpage from "../AboutPage/Aboutpage";
import Homepage from "../Home-Page/Homepage";
import Librarypage from "../Library-Page/Librarypage";
import Searchpage from "../Search-Page/Searchpage";

function SwitchMainPage({tab}) {
    switch (tab) {
        case 'home':
            return <Homepage />

        case 'search':
            return <Searchpage />

        case 'library':
            return <Librarypage />

        case 'about':
            return <Aboutpage/>

        default:
            return <Homepage />

    }
}

export default SwitchMainPage;