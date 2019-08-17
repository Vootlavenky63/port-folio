import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users1 from "./Users1";
import About2 from "./About2";
import Index1 from "./Index1";


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/Users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index1} />
        <Route path="/about/" component={About2} />
        <Route path="/users/" component={Users1} />
      </div>
    </Router>
  );
}

export default AppRouter;
