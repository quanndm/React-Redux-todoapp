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
import { isNotCheckAll, filterByStatus } from "../../helpers/todoHelper";
const getItem = JSON.parse(localStorage.getItem("todoState"));
const initialState = {
    todoList: [],
    todoEditingId: "",
    isCheckedAll: false,
    status: "ALL"
}
const todoReducer = (state = getItem ? getItem : initialState, action) => {
    const { todoList, isCheckedAll } = state;
    const list = JSON.parse(JSON.stringify(todoList));
    let updateList;
    let obj;
    switch (action.type) {
        case ADD_TODO:
            obj = Object.assign({}, state, {
                todoList: [...list, action.payload]
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case GET_TODO_EDITING_ID:
            obj = Object.assign({}, state, {
                todoEditingId: action.payload
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case ON_EDIT_TODO:
            if (action.payload.index >= 0) {
                list.splice(action.payload.index, 1, action.payload.todo);
            }
            obj = Object.assign({}, state, {
                todoList: list,
                todoEditingId: ""
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case MARK_COMPLETED:
            updateList = list.map(todo => todo.id === action.payload ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo);
            obj = Object.assign({}, state, {
                todoList: updateList,
                isCheckedAll: !isNotCheckAll(updateList)
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case CHECK_ALL_TODOS:
            updateList = todoList.map(todo => ({ ...todo, isCompleted: !isCheckedAll }));
            obj = Object.assign({}, state, {
                todoList: updateList,
                isCheckedAll: !isCheckedAll
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case REMOVE_TODO:
            obj = Object.assign({}, state, {
                todoList: filterByStatus(list, "REMOVE", action.payload),
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case SET_STATUS:
            obj = Object.assign({}, state, {
                status: action.payload
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        case CLEAR_COMPLETED:
            obj = Object.assign({}, state, {
                todoList: filterByStatus(list, "ACTIVE")
            });
            localStorage.setItem("todoState", JSON.stringify(obj));
            return obj;
        default:
            return state;
    }
}
export default todoReducer;