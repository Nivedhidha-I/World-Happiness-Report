import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Analysis from './Components/Analysis/Analysis';
import Survey from './Components/Survey/Survey';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/analysis'><Analysis/></Route>
            <Route path='/survey'><Survey/></Route>
          </Switch>
        </div>
        <Footer/>  
      </div>
    </Router>
  );
}

export default App;