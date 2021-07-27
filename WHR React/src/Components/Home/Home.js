import './Home.css';
import happiness from '../Home/happiness.svg';
import gdp from '../Home/gdp.png';
import health from '../Home/health.png';

const about = [
    {
        title:'GDP',
        image:gdp,
        content:''
    },
    {
        title:'Life Expectency',
        image:health,
        content:''
    }
]

function Home(){
    return (
    <div>
        <div className="Report">
            <div className="content">
                <h2>
                    <span className="black">
                        About
                    </span>
                    <br/>
                    World Happiness Report
                </h2>
                <p>
                    The World Happiness Report is a landmark survey of the state of
                    global happiness that ranks 149 countries by how happy their
                    citizens perceive themselves to be. The rankings in World 
                    Happiness Report use data that come from the Gallup World Poll
                    surveys. They are asked to rate their own current lives on 
                    that 0 to 10 scale.
                </p>
            </div>
            <img src={happiness}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="body-designe" viewBox="0 0 1440 220"><path fill="#ffffff" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,96C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>

        <div className="Dataset">
            <h2>About Dataset</h2><br/>
            <div className="about-grid">
                {about.map((img) => {
                    return (
                        <div className="about-container">
                            <img src={img.image}/>
                            <h3>{img.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default Home;