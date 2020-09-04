import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <h4>Welcome to task management system</h4>
      <p>
        You can create tasks and assign it to members.
        </p>
      <h4>Get started</h4>
      <Link to="/tasks">
        <button className="button" style={{ backgroundColor: "#54769d" }}>Check Tasks</button>
      </Link>
      <Link to="/members">
        <button className="button" style={{ backgroundColor: "#54769d" }}>Check Members</button>
      </Link>

    </div>
  );
}