import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editMember } from '../../actions/memberAction';
import { bindActionCreators } from 'redux'
import member from './member';
import { toast } from 'react-toastify';

const EditMember = (props) => {
    const [name, setName] = useState(props.member.name);
    const history = useHistory();

    const notify = () => toast("Member updated");

    const editMemberFormSubmitHandler = (event) => {
        event.preventDefault();
        if (name) {
            let data = {
                id: props.member.id,
                name: name,
            }
            notify();
            props.editMember(data);
            history.push("/members");
        }
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    return (
        <div>
            <h4>Edit Member</h4>
            <form onSubmit={editMemberFormSubmitHandler}>
                <div className="form-div">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" onChange={nameChangeHandler} value={name} />
                    <div>
                        <input type="button" value="Cancel" onClick={() => history.push("/member/" + props.member.id)} />
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    let memberId = ownProps.match.params.id;
    let memberObj = null;

    state.members.forEach(element => {
        if (element.id == ownProps.match.params.id) {
            memberObj = element;
        }
    });
    return {
        member: memberObj,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            editMember
        },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(EditMember);