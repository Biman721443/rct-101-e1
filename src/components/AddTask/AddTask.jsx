import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

import { IoMdAdd } from 'react-icons/io'

const AddTask = () => {
  const [query,setQuery] = useState("")
  const [todo,setTodo] = useState([])

  

  const onDelete = (id)=>{
       let newTodo = todo.filter(item => item.id !== id) 
       setTodo(newTodo)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e)=>setQuery(e.target.value)} className={styles.input}/>
      <button data-cy="add-task-button" onClick={ ()=>{
        if(query){
             setTodo([...todo,{ id:Date.now() , value:query}]);
             setQuery("")} }} ><IoMdAdd/></button>

             {todo.map((item) =>(
                <Task  key={item.id} item={item} onDelete={onDelete}/>
             ))}
    </div>
  );
};

export default AddTask;
