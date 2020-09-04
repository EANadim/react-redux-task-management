import actionType from "./actionType";
import { push } from "connected-react-router";

export const createTask = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.ADD_TASK_REQUEST, payload });
        dispatch(push('/tasks'));
    }
}
export const editTask = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.EDIT_TASK_REQUEST, payload });
        dispatch(push('/tasks'));
    }
}
export const deleteTask = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.DELETE_TASK_REQUEST, payload });
        dispatch(push('/tasks'));
    }
}