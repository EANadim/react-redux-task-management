import React from 'react';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function Nav(props) {
  console.log(props);
  const history = useHistory();
  return (
    <div>
      <Router>
        <div className="header">
          <a className="navbar-brand" onClick={() => history.push('/')}>
            <span>
              <img width="100" height="100" src={require("../assets/logo.png")} />
              <h1 style={{ margin: 0, display: "inline-block", color: "white" }}>TASK MANAGEMENT</h1>
            </span>
          </a>
          <div className="btn-group">
            <button className="button-nav" onClick={() => history.push('/')}> Home</button>
            <button className="button-nav" onClick={() => history.push('/tasks')}>Tasks</button>
            <button className="button-nav" onClick={() => history.push('/members')}>Members</button>
          </div>
        </div>
      </Router>
    </div>
  );
}