import React, { useState } from 'react';
import style from './newtodo.module.css';

const Newtodo = (props) => {
    const [todo, setTodo] = useState({title: "", desc: ""});
    const {title, desc} = todo;

    const handlerChange = (e) =>{
        const name = e.target.name;
        setTodo((pretodo) => {
            return{...pretodo, [name]: e.target.value}
        })
    }

    const handlerSubmit = (event) =>{
        event.preventDefault();
        props.onAddtodos(todo);

        setTodo({title : "", desc: ""});

    }
  return (
    <form className={style.form} onSubmit={handlerSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title :</label>
            <input type="text" id='title' name='title' value={title} onChange={handlerChange} />
      
      </div>
      <div className={style["form-field"]}> 
            <label htmlFor="desc">Description :</label>
            <textarea type="text" id='desc' name='desc'  value={desc} onChange={handlerChange}/>
      
      </div>
      <button type='submit'>ADD TODOS</button>
    </form>
  )
}

export default Newtodo
