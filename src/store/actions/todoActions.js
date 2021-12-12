const ADD_TODO="ADD_TODO";
const GET_TODO_EDITING_ID = "GET_TODO_EDITING_ID";
const ON_EDIT_TODO = "ON_EDIT_TODO";
const MARK_COMPLETED = "MARK_COMPLETED";
const CHECK_ALL_TODOS = "CHECK_ALL_TODOS"
const REMOVE_TODO = "REMOVE_TODO"
const SET_STATUS = "SET_STATUS"
const CLEAR_COMPLETED = "CLEAR_COMPLETED"
const addTodo = (todo = {})=>{
    return{
        type: ADD_TODO,
        payload: todo
    }
}
const getTodoEditingId = (id = "")=>{
    return{
        type: GET_TODO_EDITING_ID,
        payload: id
    }
}
const onEditTodo = (todo={}, index=-1)=>{
    return{
        type: ON_EDIT_TODO,
        payload: {todo, index}
    }
}
const markCompleted = (id="")=>{
    return{
        type: MARK_COMPLETED,
        payload: id
    }
}
const checkAllTodos = () => {
    return {
        type: CHECK_ALL_TODOS
    }
}
const removeTodo = (id="")=>{
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
const setStatus = (status = "")=>{
    return{
        type: SET_STATUS,
        payload: status
    }
}
const clearCompleted = ()=>{
    return{
        type: CLEAR_COMPLETED
    }
}
export {ADD_TODO, GET_TODO_EDITING_ID, ON_EDIT_TODO, MARK_COMPLETED, CHECK_ALL_TODOS, REMOVE_TODO, SET_STATUS, CLEAR_COMPLETED}
export {addTodo, getTodoEditingId, onEditTodo, markCompleted, checkAllTodos, removeTodo, setStatus, clearCompleted}