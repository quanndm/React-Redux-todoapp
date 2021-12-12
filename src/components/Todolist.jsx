import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo'
import { checkAllTodos } from '../store/actions/todoActions';
import {filterByStatus} from "../helpers/todoHelper";
const Todolist = memo((props) => {
    const dispatch = useDispatch();
    const {todoList, status} = useSelector(state => state.todos)
    const isCheckedAll = useSelector(state => state.todos.isCheckedAll)
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" checked={isCheckedAll}/>
            <label htmlFor="toggle-all" onClick={()=>dispatch(checkAllTodos())}></label>
            <ul className="todo-list">
                {
                    filterByStatus(todoList, status).map((todo, index)=>(
                        <Todo key={`todo${todo.id}`} {...{todo}} {...props} index={index}/>
                    ))
                }
            </ul>
        </section>
    )
})

export default Todolist
