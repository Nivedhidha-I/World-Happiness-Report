import './Analysis.css';
import AnalysisJS from './AnalysisJS';
 
function Analysis(){
    return (
    <div className='analysis'>
        <h2>What is the overall situation in the world regarding happiness?</h2>
        <div className='Graph'><AnalysisJS/></div>
    </div>
    )
}

export default Analysis;