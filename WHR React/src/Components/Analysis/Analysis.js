import './Analysis.css';
import React, {Component} from 'react';
import TableauReport from 'tableau-react-embed';
import { Questions } from './Questions';
import axios from 'axios';

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
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        axios.get('Analysis.php').then(res => {
            this.setState({data: res.data});
        }); 
    }
    
    render() { 
        return ( 
            <div className='Analysis'>
                <div className="pageheader">
                    <div className="content">
                        <h2>Analysis</h2>
                        <p>We have done our analysis on the dataset of World Happiness Report using the softwares Tableau, Jupyter Notebook and MySQL. Through this project we have learnt how to choose a dataset, cleanse it, understand it, form questions with it, make different charts and graphs from it, form insights, find the answers to the questions formed earlier, present the analysis in a way others can understand and make a platform where others can view the analysis. This project has been a great learning experience and we hope it would be useful for everyone.</p>
                    </div>
                    <img src="./Images/Analysis/top.svg"/>
                </div>
                {Questions.map((Analysis, index) => {
                    return (
                        <div className="Questions">
                            <h3>Q{index}. {Analysis.question}</h3>
                            <TableauReport
                                url= {Analysis.url}
                                filters= {filters}
                                parameters= {parameters}
                                options= {options} // vizCreate options
                                refreshSeconds= {refreshSeconds}
                            /> 
                            <h4>Result</h4>
                            <p>{Analysis.result}</p>
                        </div>
                    )
                })}
                <div className="pagefooter">
                    <img src="./Images/Analysis/bottom.svg"/>
                    <div className="content">
                        <h3>Conclusion</h3>
                        <p></p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Analysis;