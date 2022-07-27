import React,{useState} from "react";
import './style.css';

function Form({setTodos,todos}){
  const initState={
    id:0,
    title:"",
    body:"",
    isDone:false,
  };

  const [todo,setTodo] = useState(initState);

  const onChangeHandler = (envet)=>{
    const {name,value} = envet.target;
    setTodo({...todo,[name]:value,id:todos.length+1});
  }
  const onSumitHandler =(event)=>{
    
    event.preventDefault();
    setTodos([...todos,todo]);
    setTodo(initState);
  }
  
  return<form onSubmit={onSumitHandler} className="add-form">
          <div className="text_input">
            <input 
            type="text"
            name="title"
            value={todo.title}
            id="title"
            onChange={onChangeHandler} />

            <input 
            type="text"
            name="body"
            value={todo.body}
            id="body"
            onChange={onChangeHandler} />
          </div>
          <button className="add_btn">추가</button>
        </form>;
}
export default Form;   