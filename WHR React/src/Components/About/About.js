import './About.css';
import GDP from '../About/gdp.jpg';
import Social from '../About/social.jpg';
import Health from '../About/healthcare.jpg';
import Freedom from '../About/freedom.jpg';
import Corruption from '../About/corruption.jpg';
import Generosity from '../About/generosity.jpg';
function About(){
    return (
    <div>
        <div className="about">
            <h2>Features Analyzed</h2>
            <div className="text ">
                <h3>GDP per Capita</h3>
                <p>Per capita gross domestic product (GDP) is a metric that breaks down a country's economic output 
                    per person and is calculated by dividing the GDP of a country by its population.Small, rich 
                    countries and more developed industrial countries tend to have the highest per capita GDP.</p>
            </div>
            <img className="image  rightimg" src={GDP} alt="GDP"/>
            <img className="image leftimg" src={Social} alt="Social Support"/>
            <div className="text ">
                <h3>Social Support</h3>
                <p>Social support is a national average of the binary responses (0-no, 1-yes) to the Gallup World Poll(GWP) question, 
                    "If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?"</p>
            </div>
            <div className="text ">
                <h3>Health</h3>
                <p>Health Life Expectancy is the average number of years that a newborn can expect to live in “full health” 
                    — in other words, not hampered by disabling illnesses or injuries.</p>
            </div>
            <img className="image rightimg" src={Health} alt="Health"/>
            <img className="image leftimg" src={Freedom} alt="Freedom"/>
            <div className="text ">
                <h3>Freedom</h3>
                <p>Freedom to make life choices is the nation's average of binary responses of GWP question, "Are you satisfied or 
                    dissatisfied with your freedom to choose on what you do with your life?"</p>
            </div>
            <div className="text">
                <h3>Corruption</h3>
                <p>Perceptions of corruption are the average of binary answers to two GWP questions: "Is corruption widespread throughout
                    the government or not?" and "Is corruption widespread within businesses or not?" Where data for government corruption are 
                    missing, the perception of business corruption is used as the overall corruption-preception measure.</p>
            </div>
            <img className="image rightimg" src={Corruption} alt="Corruption"/>
            <img className="image leftimg" src={Generosity} alt="Generosity"/>
            <div className="text ">
                <h3>Generosity</h3>
                <p>Generosity is the residual of regressing the national average of GWP responses to the question, "Have you 
                    donated money to a charity in the past month?" on GDP per capita.</p>
            </div>
        </div>
    </div>
    )
}

export default About;