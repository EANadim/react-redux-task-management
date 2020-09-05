import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editTask } from '../../actions/taskAction';
import { bindActionCreators } from 'redux'
import task from './task';
import { toast } from 'react-toastify';

export function EditTask(props) {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [memberId, setMemberId] = useState(props.member.id);

  const history = useHistory();
  const notify = () => toast("Task updated");
  const editTaskFormSubmitHandler = (event) => {
    event.preventDefault();
    if (title && description, memberId) {
      let data = {
        id: props.task.id,
        title: title,
        description: description,
        member_id: parseInt(memberId)
      }
      notify();
      props.editTask(data);
      history.push("/tasks");
    }
  }
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }
  const memberChangeHandler = (event) => {
    setMemberId(event.target.value);
  }
  return (
    <div>
      <h4>Edit tasks</h4>
      <form onSubmit={editTaskFormSubmitHandler}>
        <div className="form-div">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Title" onChange={titleChangeHandler} value={title} />
          <label htmlFor="description">Description</label>
          <input style={{ height: "100px" }} type="text" id="description" name="description" placeholder="description" onChange={descriptionChangeHandler} value={description} />
          <label htmlFor="member">Assign to:</label>
          <select id="member" onChange={memberChangeHandler} value={memberId}>
            {props.members.map((value) =>
              <option key={value.id} value={value.id}>{value.name}</option>
            )}
          </select>
          <div>
            <input type="button" value="Cancel" onClick={() => history.push("/task/" + props.task.id)} />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  let taskId = ownProps.match.params.id;
  let taskObj = null;
  let memberObj = null;

  state.tasks.forEach(element => {
    if (element.id == ownProps.match.params.id) {
      taskObj = element;
    }
  });
  state.members.forEach(element => {
    if (element.id === taskObj.member_id) {
      memberObj = element;
    }
  });
  return {
    task: taskObj,
    member: memberObj,
    members: state.members
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editTask
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(EditTask);