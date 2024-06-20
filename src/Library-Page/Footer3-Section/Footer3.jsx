function Footer3({setTab}) {
    return (
        <div className="footer-03">
            <a className="linkk1" href="./index.html">
                {" "}
                <span className="imoji1">
                    <i className="fa-solid fa-house" />
                </span>
                <br />
                Home
            </a>
            <a className="linkk2" href="./search.html">
                {" "}
                <span className="imoji2">
                    <i className="fa-solid fa-magnifying-glass" />
                </span>
                <br />
                Search
            </a>
            <a onClick={()=> setTab('library')} className="linkk3" href="./library.html">
                {" "}
                <span className="imoji3">
                    <i className="fa-solid fa-layer-group" />
                </span>
                <br />
                Library
            </a>
            <a className="linkk4" href=".//about.html">
                {" "}
                <span className="imoji4">
                    <i className="fa-regular fa-user" />
                </span>
                <br />
                About
            </a>
        </div>

    );
}

export default Footer3;