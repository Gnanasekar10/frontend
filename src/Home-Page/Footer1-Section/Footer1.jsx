function Footer1({setTab}) {
    return (
        <footer>
            <div onClick={()=> setTab('home')} className="linkk1">
                {" "}
                <span className="imoji1">
                    <i className="fa-solid fa-house"></i>
                </span>
                <br />
                Home
            </div >
            <div onClick={()=> setTab('search')} className="linkk2">
                {" "}
                <span className="imoji2">
                    <i className="fa-solid fa-magnifying-glass" />
                </span>
                <br />
                Search
            </div>
            <div onClick={()=> setTab('library')} className="linkk3">
                {" "}
                <span className="imoji3">
                    <i className="fa-solid fa-layer-group" />
                </span>
                <br />
                Library
            </div>
            <div onClick={()=> setTab('about')} className="linkk4">
                {" "}
                <span className="imoji4">
                    <i className="fa-regular fa-user" />
                </span>
                <br />
                About
            </div>
        </footer>

    );
}

export default Footer1;