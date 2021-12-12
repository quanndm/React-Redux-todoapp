import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterByStatus } from "../helpers/todoHelper";
import { setStatus, clearCompleted } from '../store/actions/todoActions';
const Footer = memo(() => {
    const dispatch = useDispatch();
    const {todoList, status} = useSelector(state=>state.todos)
    const [numOfTodos, setNumOfTodos] = useState(todoList.length);
    const [numOfTodosLeft, setNumOfTodosLeft] = useState(filterByStatus(todoList, "ACTIVE").length)
    useEffect(() => {
        setNumOfTodos(todoList.length);
        setNumOfTodosLeft(filterByStatus(todoList, "ACTIVE").length)
    },[todoList])
    const filterBtns = [
        {
            title: "All",
            isActived: status==="ALL",
            onClick: ()=>dispatch(setStatus("ALL")),
            link: ""
        },
        {
            title: "Active",
            isActived: status === "ACTIVE",
            onClick: ()=>dispatch(setStatus("ACTIVE")),
            link: "/active"
        },
        {
            title: "Completed",
            isActived: status === "COMPLETED",
            onClick: ()=>dispatch(setStatus("COMPLETED")),
            link: "/completed"
        },
    ]
    
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft<=1?"item":"items"}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {filterBtns.map((item)=>(
                    <FilterBtn 
                        key={`btn${item.title}`} 
                        {...item}
                    />
                ))}
            </ul>
            {
                numOfTodos>numOfTodosLeft&&<button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
            }
            
        </footer>
    )
})

const FilterBtn = memo((props) => {
    const {title, isActived, onClick, link} = props;
    return (
        <>
            <li>
                <a
                    href={`/#${link}`}
                    className={`${isActived ? "selected":""}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
})
export default Footer
