import React from "react";
import UseStateExample from './components/UseStateExample';
import UseMemoExample from './components/UseMemoExample';
import ReduxExample from './components/ReduxExample';
import UseEffectExample from './components/UseEffectExample';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import "./App.css";

export default () => {
  return (
    <Router>
    <div className="App">
      <header className="App-deader">
        <ul>
          <li>
            <Link to="/">State</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: "/memo",
                state: {
                  from: "root"
                }
              }
            }>Memo</Link>
          </li>
          <li>
            <Link to="/effect/rajat/porwal">Effect</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={UseStateExample} />
            <Route exact path="/memo" component={UseMemoExample} />
            <Route exact path="/effect/:firstName/:lastName" component={UseEffectExample} />
            <Route exact path="/redux" component={ReduxExample} />
          </Switch>
        </div>
      </header>

        { /* useMemo is used for memorizing the previous render of 
        component so that component will not get render again, 
        it will get rendered if props or state gets updated */ }
      
    </div>
    </Router>
  );
};
