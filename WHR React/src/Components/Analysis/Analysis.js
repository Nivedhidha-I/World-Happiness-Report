import './Analysis.css';
import React, {Component} from 'react';
import TableauReport from 'tableau-react-embed';
import axios from 'axios';

const options = {
    height: 730,
    width: 1200,
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
                        </div>
                    )
                })}
                
            </div>
         );
    }
}
 
export default Analysis;