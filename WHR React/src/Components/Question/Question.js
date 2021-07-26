import './Question.css';
import { Link } from 'react-router-dom';
function Question(){
    return (
    <div className='question'>
        <h2>ANALYSIS</h2>
        <ul type="circle">
            <Link to="/analysis/q"><li>Q</li></Link> 
        </ul>
    </div>
    )
}

export default Question;