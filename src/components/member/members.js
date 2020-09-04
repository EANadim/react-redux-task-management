import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Members = (props) => {
  console.log(props);
  return (
    <div>
      <h4>All members</h4>
      <p>You will find all members here.</p>
      <span>
        <h4 style={{ margin: 0, display: "inline-block" }}>Here is your all members:</h4>
        <Link to="members/add">
          <button className="button">Add new</button>
        </Link>
      </span>
      <ol>
        {props.members.map((value) =>
          <li key={value.id}>
            <Link to={`/member/${value.id}`}>
              <span>{value.name}</span>
            </Link>
            <span style={{ marginLeft: "20px" }}>{value.task_count} assigned tasks</span>
          </li>)}
      </ol>
    </div>
  );
}
const mapStateToProps = (state) => {
  let membersObj = [];
  state.members.forEach((element, index) => {
    let taskCount = state.tasks.filter(e => e.member_id === element.id).length;
    let member = { ...element, task_count: taskCount }
    membersObj.push(member);
  });
  return {
    members: membersObj
  }
}
export default connect(mapStateToProps)(Members);