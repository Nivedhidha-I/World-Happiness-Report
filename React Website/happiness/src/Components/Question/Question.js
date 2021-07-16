import './Question.css';
function Question(){
    return (
    <div className='question'>
        <h2>ANALYSIS</h2>
        <ul type="circle">
            <a href="q0"><li>What is the overall situation in world regarding <br/> happiness?</li></a> 

            <a href="q1"><li>Which countries are better positioned in <br/> each of the aspects?</li></a>
        
            <a href="q2"><li>Finding the reason why happiness <br/> rank changed over the years in <br/> different regions?</li></a> 

            <a href="q3"><li>In what ways, Generosity and <br/> Health plays a role in impacting <br/> the world happiness score?</li></a>

            <a href="q4"><li>Does a country's GDP affect the <br/> happiness rate?</li></a>
            
            <a href="q5"><li>What is the trend followed by India’s <br/> happiness score 
                in the past 5 years?</li></a>

            <a href="q6"><li>Which country has more trust on government <br/> with respect to freedom?</li></a>

            <a href="q7"><li>An analysis to find which are the factors causing less <br/> happiness scores in few regions and prediction on 
                how it <br/> would be if each factor is improved.</li></a>
        </ul>
    </div>
    )
}

export default Question;