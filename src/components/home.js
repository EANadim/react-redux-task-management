import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <h4>Welcome to task management system</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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