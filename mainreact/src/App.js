import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=>{
            return <div>
            <Link to="/first">First</Link>
              <Link to="/second">Second</Link>
            </div>
          }} />
          <Route path="/first" exact component={LandingPage} />
          <Route path="/second" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
