import "./msStyles.css"
import mainImage from "../images/Battleships-7-15-2024.png"

const MainScreen = () => {
    return (
        <div className="App">
            <div className="mainTitle">
                <img src={mainImage}></img>
            </div>
            <div className="wrapper">
                <button className="loader-button">Loader</button>
            </div>
        </div>
    )
}

export default MainScreen