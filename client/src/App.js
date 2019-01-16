import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPage from './Pages/Search/Search';
import SavedPage from './Pages/Saved/Saved';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
             <Route path="/" exact component={SearchPage} />
             <Route path="/saved" exact component={SavedPage} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
