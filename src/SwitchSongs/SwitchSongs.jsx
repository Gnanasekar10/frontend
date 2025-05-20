import Songplay1 from "../Home-Page/Main1-Section/Songplay1"

function SwitchSongs({ play }) {

    switch (play) {
        case "song1":
            return <audio src="http://localhost:3434/audios/song2.mp3" controls></audio>

        case 'search':
            return 

        case 'library':
            return 

        case 'about':
            return

        default:
            return

    }
}

export default SwitchSongs;