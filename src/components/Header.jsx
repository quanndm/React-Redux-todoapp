import React, {memo, useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
const Header = memo(() => {
    const dispatch = useDispatch();
    const isCheckedAll = useSelector(state => state.todos.isCheckedAll)
    const [text, setText] = useState("");
    const onAddTodo = (e = {})=>{
        if (e.key === "Enter" && text) {
            const todo = {
                id: new Date().valueOf(),
                text,
                isCompleted: false
            }
            dispatch(addTodo(todo));
            setText("");
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input type="text"
                value={text} 
                className="new-todo" 
                onChange={(e)=>setText(e.target.value)}
                onKeyPress={(e)=>onAddTodo(e)}
                checked={isCheckedAll}
            />
        </header>
    )
})

export default Header
