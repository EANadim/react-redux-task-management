import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export function Tasks(props) {
  return (
    <div>
      <h4>All tasks</h4>
      <p>You will find all tasks here.</p>
      <span>
        <h4 style={{ margin: 0, display: "inline-block" }}>Here is your all tasks:</h4>
        <Link to="tasks/add">
          <button className="button">Add new</button>
        </Link>
      </span>
      <ol>
        {props.tasks.map((value) =>
          <li key={value.id}>
            <Link to={`/task/${value.id}`}>
              <span>{value.title}</span>
            </Link>
            <span style={{ marginLeft: "20px" }}>{value.member_name}</span>
          </li>)}
      </ol>
    </div>
  );
}
const mapStateToProps = (state) => {
  state.tasks.forEach((element, index) => {
    let memberIndex = state.members.findIndex(x => x.id === element.member_id)
    state.tasks[index] = { ...state.tasks[index], member_name: state.members[memberIndex].name }
  });
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(Tasks);