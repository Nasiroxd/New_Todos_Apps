import React from 'react';
import style from './todo.module.css';

const Todo = (props) => {
    const {title, desc }= props.todo;
    const {id} = props;
    
    const handler = (id)=>{
        props.onhandlerRemove(id);
    }
    
  return (
    <article className={style.todo}>
       <div>
       <h1>{title}</h1>
        <p>{desc}</p>
       </div>
       <div>
       <button className={style.btn} onClick={()=>{handler(id)}}> 
            <i className='fa fa-trash fa-2x'></i>
        </button>
       </div>
      
    </article>
  )
}

export default Todo
