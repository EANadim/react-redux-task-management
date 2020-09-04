import actionType from "./actionType";
import { push } from "connected-react-router";

export const createMember = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.ADD_MEMBER_REQUEST, payload });
        dispatch(push('/members'));
    }
}
export const editMember = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.EDIT_MEMBER_REQUEST, payload });
        dispatch(push('/members'));
    }
}
export const deleteMember = (payload) => {
    return dispatch => {
        dispatch({ type: actionType.DELETE_MEMBER_REQUEST, payload });
        dispatch(push('/members'));
    }
}