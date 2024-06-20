import Flexpart3 from "./Flexpart3";

function Header2() {
    return (
        <div className="header-02">
            <Flexpart3></Flexpart3>
            <>
                <input
                    className="buttons"
                    type="text"
                    placeholder="Search here"
                />
                <a href="">
                    <i className="fa-solid fa-magnifying-glass" />
                </a>
            </>

        </div>
    );
}

export default Header2;