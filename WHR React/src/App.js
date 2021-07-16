//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Question from './Components/Question/Question';
import Q0 from './Components/Analysis/Q0';
import Q1 from './Components/Analysis/Q1';
import Q2 from './Components/Analysis/Q2';
import Q3 from './Components/Analysis/Q3';
import Q4 from './Components/Analysis/Q4';
import Q5 from './Components/Analysis/Q5';
import Q6 from './Components/Analysis/Q6';
import Q7 from './Components/Analysis/Q7';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/about'><About/></Route>
          <Route exact path='/analysis'><Question/></Route>
          <Route path='/analysis/q0'><Q0/></Route>
          <Route path='/analysis/q1'><Q1/></Route>
          <Route path='/analysis/q2'><Q2/></Route>
          <Route path='/analysis/q3'><Q3/></Route>
          <Route path='/analysis/q4'><Q4/></Route>
          <Route path='/analysis/q5'><Q5/></Route>
          <Route path='/analysis/q6'><Q6/></Route>
          <Route path='/analysis/q7'><Q7/></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;