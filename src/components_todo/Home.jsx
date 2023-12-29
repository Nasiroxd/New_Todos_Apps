import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css';
import Newtodo from './Newtodo';
import {v4 as uuidv4} from 'uuid';

// const todos = [
//     {
//         id: 1,
//         title: "slepping at night",
//         desc: "slepping at night 10:00 pm"
//     },
//     {
//         id: 2,
//         title: "slepping at morning",
//         desc: "slepping at morning 10:00 AM"
//     },
// ]

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handlerAddTodos = (todo) =>{
        setTodos((pretodos) => {
            return [...pretodos, {id: uuidv4() ,todo}];
        });
    };

    const handlerButton = (id)=>{

        const filedName = todos.filter((todo)=> todo.id !== id);
        setTodos(filedName);
        
        
      }

    
      


  return (
    <div className={style.container}>
        <h1 style={{textAlign:"center", color:"white" , fontWeight:"bold"}}>Todo Apps.</h1>

        <Newtodo onAddtodos={handlerAddTodos} />
        <Todos todos={todos} onhandlerRemove={handlerButton}/>
        
      
    </div>
  )
}

export default Home
