import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createMember } from '../../actions/memberAction';
import { bindActionCreators } from 'redux'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

function AddMember(props) {
    const [name, setName] = useState("");

    const history = useHistory();

    const notify = () => toast("Member registered");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const memberFormSubmitHandler = (event) => {
        event.preventDefault();
        if (name) {
            let member = {
                name: name
            }
            notify();
            props.createMember(member);
            history.push("/members");
        }
        else {
            alert("name must not be empty")
        }
    }
    return (
        <div>
            <h4>Add member</h4>
            <form onSubmit={memberFormSubmitHandler}>
                <div className="form-div">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" onChange={nameChangeHandler} />
                    <div>
                        <input type="button" value="Cancel" onClick={() => history.push("/members")} />
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
            createMember
        },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMember);