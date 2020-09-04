import actionType from '../actions/actionType';

const rootReducer = (state, action) => {
    if (action.type == actionType.ADD_TASK_REQUEST) {
        let currentId = 0;
        state.tasks.filter(task => {
            if (task.id > currentId)
                currentId = task.id;
        });
        currentId++;
        let tasks = state.tasks;
        tasks.push({ ...action.payload, id: currentId });
        console.log(tasks);
        return {
            ...state,
            tasks: tasks
        }
    }
    if (action.type === actionType.EDIT_TASK_REQUEST) {
        var index = state.tasks.findIndex(x => x.id == action.payload.id);
        state.tasks[index] = action.payload;
        console.log(state);
        return {
            ...state
        }
    }
    if (action.type === actionType.DELETE_TASK_REQUEST) {
        var index = state.tasks.findIndex(x => x.id == action.payload.id);
        state.tasks.splice(index, 1)
        return {
            ...state
        }
    }
    if (action.type == actionType.ADD_MEMBER_REQUEST) {
        let currentId = 0;
        state.members.filter(member => {
            if (member.id > currentId)
                currentId = member.id;
        });
        currentId++;
        let members = state.members;
        members.push({ ...action.payload, id: currentId });
        console.log(members);
        return {
            ...state,
            members: members
        }
    }
    if (action.type === actionType.EDIT_MEMBER_REQUEST) {
        var index = state.members.findIndex(x => x.id == action.payload.id);
        state.members[index] = action.payload;
        console.log(state);
        return {
            ...state
        }
    }
    if (action.type === actionType.DELETE_MEMBER_REQUEST) {
        var memberIndex = state.members.findIndex(x => x.id == action.payload.id);
        var taskIndex = state.tasks.findIndex(x => x.member_id == action.payload.id);
        state.members.splice(memberIndex, 1);
        state.tasks.splice(taskIndex, 1);
        return {
            ...state
        }
    }
    return state;

}
export default rootReducer;