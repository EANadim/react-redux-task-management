import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteTask } from '../../actions/taskAction';
import { bindActionCreators } from 'redux'

const Task = (props) => {
  const history = useHistory();
  const deleteBtnHandler = () => {
    let data = {
      id: props.task.id
    }
    props.deleteTask(data);
  }
  return (
    <div>
      <h4>{props.task.title}</h4>
      <p>{props.task.description}</p>

      <span><b>Assign to: </b>{props.member.name}</span>
      <div>
        <Link to={`edit/${props.task.id}`}>
          <button className="button">Edit</button>
        </Link>
        <button onClick={deleteBtnHandler} className="button">Delete</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  let taskObj = null;
  let memberObj = null;
  let taskFound = false;
  state.tasks.forEach(element => {
    if (element.id == ownProps.match.params.id) {
      taskObj = element;
      taskFound = true
    }
  });
  if (!taskFound) {
    //route to tasks
    console.log("route to tasks");
  }
  else {
    state.members.forEach(element => {
      if (element.id === taskObj.member_id) {
        memberObj = element;
      }
    });
    return {
      task: taskObj,
      member: memberObj
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTask
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);