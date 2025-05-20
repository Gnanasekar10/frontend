import { useEffect } from "react";

const songsArr = [
    {
        imageUrl: "./img/Hotelcalifornia.jpg",
        title: "Hotel California",
        subTitle: "Eagles",
        audioUrl: "./songs/HotelCalifornia.mp3"
    },
    {
        imageUrl: "./img/thunder.jpeg",
        title: "Thunder",
        subTitle: "Imagine Dragons",
        audioUrl: "./songs/Thunder.mp3"
    },
    {
        imageUrl: "./img/Treat_You_Better_(Official_Single_Cover)_by_Shawn_Mendes.png",
        title: "Treat you Better",
        subTitle: "Shawn Mendes",
        audioUrl: "./songs/"
    },
    {
        imageUrl: "./img/closer.jpeg",
        title: "Closer",
        subTitle: "The Chainsmokers",
        audioUrl: "./songs/Closer - The Chainsmokers Ft. Halsey 320-(Pagallworld).mp3"
    },
    {
        imageUrl: "./img/DJSnakeLetMeLoveYou.jpg",
        title: "Let Me Love You",
        subTitle: "DJ Snake",
        audioUrl: "./songs/Let-Me-Love-You_320(PaglaSongs).mp3"
    },
    {
        imageUrl: "./img/Sean_Paul_ft_Dua_Lipa_-_No_lie.jpg",
        title: "No Lie",
        subTitle: "Dua Lipa",
        audioUrl: "./songs/No-Lie_320(PaglaSongs).mp3"
    },
    {
        imageUrl: "./img/perfect.jpg",
        title: "Perfect",
        subTitle: "ED Sheeran",
        audioUrl: "./songs/Perfect_320(PaglaSongs).mp3"
    },
    {
        imageUrl: "./img/strip.jpg",
        title: "Strip That Down",
        subTitle: "Liam Payne",
        audioUrl: "./Songs/song8.mp3"
    },
    {
        imageUrl: "./img/hear me.jpeg",
        title: "Hear Me Now",
        subTitle: "Alok,Zeeba",
        audioUrl: "./songs/Levitating-(PagalSongs.Com.IN).mp3"
    },
    {
        imageUrl: "./img/Bad_Liar_(Official_Single_Cover)_by_Selena_Gomez.png",
        title: "Bad Liar",
        subTitle: "Salena Gomez",
        audioUrl: "./songs/Bad Liar-(Pagallworld).mp3"
    },
    {
        imageUrl: "",
        title: "hello",
        subTitle: "JDK",
        audioUrl: "./Songs/song10.mp3"
    },
]

function CardComp({ value, setSongObj }) {
    function handleClick() {
        setSongObj(value);
    }
    return (
        <>
            <div className="song-section-03">
                <div className="sec2div">
                    <span className="sec2square">
                        <img
                            src={value.imageUrl}
                            alt=""
                            height="60px"
                            width="60px"
                        />
                    </span>
                    <div>
                        <p className="para">{value.title}</p>
                        <p className="para2">{value.subTitle}</p>
                    </div>
                    <button onClick={handleClick}>Play</button>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}

function Songs3({ setSongObj }) {
    useEffect(() => {
        setSongObj(songsArr[0]);
    }, [])
    return (
        <>
        <h2 className="songlist">Song-Lists</h2>
            {
                songsArr.map((value, index) => {
                    return <CardComp key={index} value={value} setSongObj={setSongObj} />
                })
            }
        </>
    );
}

export default Songs3;
