import './css.css';
import React, {Component} from 'react';
import TableauReport from 'tableau-react-embed';
import { Questions } from './Questions';

const options = {
    height: '1000px',
    width: '90%',
    hideToolbar: true,
    hideTabs: true
};

const filters = {
    Colors: ['Blue', 'Red'],
    Sizes: ['Small', 'Medium']
};

const parameters = {
    Param1: 'Value',
    Param2: 'Other Value'
};

const refreshSeconds = 60 * 5;

class Analysis extends Component {
    
    render() { 
        return ( 
            <div className='Analysis'>
                <div className="pageheader">
                    <div className="content-1">
                        <h2>Analysis</h2>
                        <p>We have done our analysis on the dataset of World Happiness Report using the softwares Tableau, Jupyter Notebook and MySQL. Through this project we have learnt how to choose a dataset, cleanse it, understand it, form questions with it, make different charts and graphs from it, form insights, find the answers to the questions formed earlier, present the analysis in a way others can understand and make a platform where others can view the analysis. This project has been a great learning experience and we hope it would be useful for everyone.</p>
                    </div>
                </div>

                {Questions.map((Analysis, index) => {
                    return (
                        <div className="Questions">
                            <h3 className="question">Q{index}. {Analysis.question}</h3>
                            <TableauReport
                                url= {Analysis.url}
                                filters= {filters}
                                parameters= {parameters}
                                options= {options} // vizCreate options
                                refreshSeconds= {refreshSeconds}
                            /> 
                            <div className="Result">
                            <h4 className="result">Result</h4>
                            <p>{Analysis.result}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="pagefooter">
                   
                    <div className="content-2">
                        <h3>Conclusion</h3>
                        <p>The world happiness report depends on the average of scores that people gave, based on their opinions about how different factors affect their happiness. From the overall analysis of the World Happiness Report, we could come to a conclusion that, the happiness scores vary based on different factors in different regions. On the basis of the analysis that we made, we found that Economy(GDP per capita) and Social Support are the main factors on which happiness score depends on.
                        </p>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Analysis;