import './Analysis.css';
import React, {Component} from 'react';
import TableauReport from 'tableau-react-embed';
import axios from 'axios';

const options = {
    height: '800',
    width: '1000',
    hideTabs: true,
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
                <h2>Analysis</h2>
                <p></p>
                <h3>Q0. What is the overall situation in the world regarding happiness?</h3>
                            <TableauReport
                                url= "https://public.tableau.com/views/WorldsSmile/WorldsSmile?:language=en-US&:display_count=n&:origin=viz_share_link"
                                filters= {filters}
                                parameters= {parameters}
                                options= {options} // vizCreate options
                                refreshSeconds= {refreshSeconds}
                            />
                {this.state.data.map((Analysis) => {
                    return (
                        <div className="Questions">
                            <h3>Q{Analysis.QNo}. {Analysis.Question}</h3>
                            <TableauReport
                                url= {Analysis.TableauPublicLink}
                                filters= {filters}
                                parameters= {parameters}
                                options= {options} // vizCreate options
                                refreshSeconds= {refreshSeconds}
                            />
                            <p>Conclusion: {Analysis.Conclusion}</p>
                        </div>
                    )
                })}
                
            </div>
         );
    }
}
 
export default Analysis;