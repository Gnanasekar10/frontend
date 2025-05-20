import Loginpage from "../Login-Page/Loginpage"
import Signuppage from "../SignUp-Page/Signuppage"
import Welcomepage from "../Welcome-Page/Welcomepage"



function SwitchAuthPage({tab}) {
    switch (tab) {
        case 'welcome':
            return <Welcomepage />

        case 'login':
            return <Loginpage />

        case 'signup':
            return <Signuppage />

        default:
            return <Welcomepage />

    }
}

export default SwitchAuthPage;


