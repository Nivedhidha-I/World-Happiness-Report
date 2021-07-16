import './Home.css';
import Emojis from '../Home/home.jpg';
function Home(){
    return (
    <div>
        <div className="description">
            <h2>About World Happiness Report</h2>
            <p>The World Happiness Report is a landmark survey of the state of global happiness that ranks 149 countries by how happy their 
                citizens perceive themselves to be. The rankings in World Happiness Report use data that come from the Gallup World Poll 
                surveys. They are asked to rate their own current lives on that 0 to 10 scale.</p>
        </div>

        <div className="image">
            <img src={Emojis} alt="Emojis"/>
        </div>
    </div>
    )
}

export default Home;