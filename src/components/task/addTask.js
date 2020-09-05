import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/taskAction';
import { bindActionCreators } from 'redux'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [memberId, setmemberId] = useState("");

  const history = useHistory();

  const notify = () => toast("Task registered");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }
  const memberChangeHandler = (event) => {
    setmemberId(event.target.value);
  }
  const taskFormSubmitHandler = (event) => {
    event.preventDefault();
    if (title && description && memberId) {
      let task = {
        title: title,
        description: description,
        member_id: parseInt(memberId)
      }
      notify();
      props.createTask(task);
      history.push("/tasks");
    }
    else {
      alert("title & description must not be empty")
    }
  }
  return (
    <div>
      <h4>Add task</h4>
      <form onSubmit={taskFormSubmitHandler}>
        <div className="form-div">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Title" onChange={titleChangeHandler} />
          <label htmlFor="description">Description</label>
          <input style={{ height: "100px" }} type="text" id="description" name="description" placeholder="description" onChange={descriptionChangeHandler} />
          <label htmlFor="member">Assign to:</label>
          <select id="member" onChange={memberChangeHandler} value={memberId}>
            <option value="">-SELECT-</option>
            {props.members.map((value) =>
              <option key={value.id} value={value.id}>{value.name}</option>
            )}
          </select>
          <div>
            <input type="button" value="Cancel" onClick={() => history.push("/tasks")} />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createTask
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);