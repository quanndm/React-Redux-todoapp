import { 
    ADD_TODO, 
    GET_TODO_EDITING_ID, 
    ON_EDIT_TODO,
    MARK_COMPLETED,
    CHECK_ALL_TODOS,
    REMOVE_TODO,
    SET_STATUS,
    CLEAR_COMPLETED
} from "../actions/todoActions";
import {isNotCheckAll, filterByStatus} from "../../helpers/todoHelper"
const initialState = {
    todoList: [],
    todoEditingId: "",
    isCheckedAll: false,
    status: "ALL"
}
const todoReducer = (state = initialState, action) => {
    const { todoList, isCheckedAll } = state;
    const list = JSON.parse(JSON.stringify(todoList));
    let updateList;
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: [...list, action.payload]
            });
        case GET_TODO_EDITING_ID:
            const id = action.payload;
            return Object.assign({}, state, {
                todoEditingId: id
            });
        case ON_EDIT_TODO:
            if (action.payload.index >= 0) {
                list.splice(action.payload.index, 1, action.payload.todo);
            }
            return Object.assign({}, state, {
                todoList: list,
                todoEditingId: ""
            });
        case MARK_COMPLETED:
            updateList = list.map(todo => todo.id === action.payload ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo);
            return Object.assign({}, state, {
                todoList: updateList,
                isCheckedAll: !isNotCheckAll(updateList)
            });
        case CHECK_ALL_TODOS:
            updateList = todoList.map(todo => ({ ...todo, isCompleted: !isCheckedAll }));
            return Object.assign({}, state, {
                todoList: updateList,
                isCheckedAll: !isCheckedAll
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todoList: filterByStatus(list, "REMOVE", action.payload),
            });
        case SET_STATUS:
            return Object.assign({}, state, {
                status: action.payload
            });
        case CLEAR_COMPLETED:
            return Object.assign({}, state, {
                todoList: filterByStatus(list, "ACTIVE")
            });
        default:
            return state;
    }
}
export default todoReducer;