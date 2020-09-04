import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteMember } from '../../actions/memberAction';
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Member = (props) => {
    const [openDeleteDialog, setOpenopenDeleteDialog] = useState(false);
    const history = useHistory();

    const deleteBtnHandler = () => {
        setOpenopenDeleteDialog(true);
    }
    const handleCloseDeleteDialog = () => {
        setOpenopenDeleteDialog(false);
    }
    const confirmDeleteBtnHandler = () => {
        let data = {
            id: props.task.id
        }
        props.deleteMember(data);
        setOpenopenDeleteDialog(false);
    }
    return (
        <div>
            <h4>{props.member.name}</h4>

            <span>
                <h4 style={{ margin: 0, display: "inline-block" }}>Here is {props.member.name}'s' all tasks:</h4>
            </span>
            <ol>
                {props.tasks.map((value) =>
                    <li key={value.id}>
                        <Link to={`/task/${value.id}`}>
                            <span>{value.title}</span>
                        </Link>
                    </li>)}
            </ol>
            <div>
                <Link to={`edit/${props.member.id}`}>
                    <button className="button">Edit</button>
                </Link>
                <button onClick={deleteBtnHandler} className="button">Delete</button>
            </div>
            <div>
                <Dialog
                    open={openDeleteDialog}
                    onClose={handleCloseDeleteDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Delete member?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDeleteDialog} color="primary">
                            Disagree
          </Button>
                        <Button onClick={confirmDeleteBtnHandler} color="primary" autoFocus>
                            Agree
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    let memberObj = null;
    let tasks = [];
    let memberFound = false;
    state.members.forEach(element => {
        if (element.id == ownProps.match.params.id) {
            memberObj = element;
            memberFound = true
        }
    });
    if (!memberFound) {
        //route to tasks
        console.log("route to members");
    }
    else {
        state.tasks.forEach(element => {
            if (element.member_id == ownProps.match.params.id) {
                tasks.push(element);
            }
        });
        return {
            member: memberObj,
            tasks: tasks
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            deleteMember
        },
        dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Member);