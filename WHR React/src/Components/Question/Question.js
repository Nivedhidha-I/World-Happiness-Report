import './Question.css';
import { Link } from 'react-router-dom';
function Question(){
    return (
    <div className='question'>
        <h2>ANALYSIS</h2>
        <ul type="circle">
            <Link to="/analysis/q0"><li>What is the overall situation in world regarding <br/> happiness?</li></Link> 

            <Link to="/analysis/q1"><li>Which countries are better positioned in <br/> each of the aspects?</li></Link>
        
            <Link to="/analysis/q2"><li>Finding the reason why happiness <br/> rank changed over the years in <br/> different regions?</li></Link> 

            <Link to="/analysis/q3"><li>In what ways, Generosity and <br/> Health plays a role in impacting <br/> the world happiness score?</li></Link>

            <Link to="/analysis/q4"><li>Does a country's GDP affect the <br/> happiness rate?</li></Link>
            
            <Link to="/analysis/q5"><li>What is the trend followed by India’s <br/> happiness score 
                in the past 5 years?</li></Link>

            <Link to="/analysis/q6"><li>Which country has more trust on government <br/> with respect to freedom?</li></Link>

            <Link to="/analysis/q7"><li>An analysis to find which are the factors causing less <br/> happiness scores in few regions and prediction on 
                how it <br/> would be if each factor is improved.</li></Link>
        </ul>
    </div>
    )
}

export default Question;