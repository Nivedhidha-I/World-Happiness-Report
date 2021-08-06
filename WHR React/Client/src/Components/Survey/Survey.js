import React, { Component } from 'react';
import './Survey.css';
import { Questions } from './Questions';
class Survey extends Component {
    render() { 
        return(
            <div className="survey-container-1">
                <div className="survey-container-2">
                    <div className="Survey-content">
                        <h2>Survey</h2>
                        <p> We have made this survey as a means to collect the data regarding your happiness from 
                            the answers submitted by you for analysis purposes. Your identity will remain confidential 
                            and the survey is only meant to be answered with your personal interest. </p>
                        <h3>Questions:</h3>
                    </div>
                    <form>
                        {
                            Questions.map((survey, index)=>{
                                return(
                                    <div className="survey-box">
                                        <p>Q{index+1}. {survey.Question} </p>
                                        <div className="survey-opection">
                                            <div className="survey-opction-1">
                                                <input type="radio" id="s1" name={survey.Value}></input>
                                                <label for={survey.Value}>Most of the time</label>
                                            </div>
                                            <div className="survey-opction-2">
                                                <input type="radio" id="s1" name={survey.Value}></input>
                                                <label for={survey.Value}>Often	Sometimes</label>
                                            </div>
                                            <div classsName="survey-opection-3">
                                                <input type="radio" id="s1" name={survey.Value}></input>
                                                <label for={survey.Value}>Rarely	Almost never</label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="survey-box">
                            <p className="survey-question">Q10. What do you think you can do now, to increase your happiness? </p>
                            <textarea name="" rows="5"/>         
                        </div>
                        <input className="submit" type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}
 
export default Survey;