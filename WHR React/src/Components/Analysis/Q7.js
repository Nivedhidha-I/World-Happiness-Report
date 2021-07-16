import './Q.css';
import Q7JS from './Q7JS';
import prediction1 from '../Analysis/prediction1.png';
import prediction2 from '../Analysis/prediction2.png';
import prediction3 from '../Analysis/prediction3.png';
function Q7(){
    return (
    <div className='analysis'>
        <h2>An analysis to find which are the factors causing fewer happiness scores in a few regions and prediction on how it would be if each factor is improved.</h2>
        <div className='Graph'><Q7JS/></div>
        <h2>Prediction Using Python</h2>
        <img src={prediction1}/>
        <img src={prediction2}/>
        <img src={prediction3}/>
    </div>
    )
}

export default Q7;