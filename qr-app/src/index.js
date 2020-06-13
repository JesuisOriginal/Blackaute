import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/Game">Game</Link>
            </li> */}
            <li>
              <Link to="/pages/qr-reader">Read QR</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/Game"  exact>
            
          </Route> */}
          <Route path="/pages/qr-reader" component={Test} exact>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

function Home() {
  return <h2>Home</h2>;
}

// function About() {
//   return <Game></Game>;
// }

function Users() {
  return <h2>Users</h2>;
}
