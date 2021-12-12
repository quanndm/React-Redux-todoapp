import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoEditingId, onEditTodo, markCompleted, removeTodo } from '../store/actions/todoActions';
const Todo = memo((props) => {
    const dispatch = useDispatch();
    const { todo, index} = props;
    const todoEditingId = useSelector(state => state.todos.todoEditingId)
    const isEditing = todoEditingId === todo.id;
    const [text, setText] = useState(todo.text);
    const editTodo = ()=>{
        dispatch(onEditTodo({
            ...todo,
            text
        }, index))
    }
    return (
        <li className={`${isEditing && "editing"} ${todo.isCompleted && "completed"}`}>
            {
                !isEditing
                    ? <div className="view">
                        <input className="toggle" 
                            type="checkbox" 
                            checked={todo.isCompleted} 
                            onChange={()=>{dispatch(markCompleted(todo.id))}}
                        />
                        <label onDoubleClick={()=>dispatch(getTodoEditingId(todo.id))}>{todo.text}</label>
                        <button className="destroy" onClick={()=>dispatch(removeTodo(todo.id))}></button>
                    </div>
                    : <input 
                        className='edit' 
                        type="text" 
                        value={text}
                        onChange={(e)=>{setText(e.target.value)}}
                        onKeyPress={(e)=>{
                            if (e.key === "Enter") {
                                editTodo()
                            }
                        }}
                        />
            }
        </li>
    )
})

export default Todo
