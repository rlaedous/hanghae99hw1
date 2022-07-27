import React from "react";
import './style.css';

function Todo({todo,onDeleteHandler,onEditHandler}){
    return (<div className="todoWrap">
              <h2 className="todoTitle">{todo.title}</h2>
              <div>{todo.body}</div>
            
              <div className="btnWrap">
                <button className="todo-del" onClick={()=>onDeleteHandler(todo.id)}>
                  삭제
                </button>
                <button className="todo-done" onClick={()=>onEditHandler(todo.id)}>
                  {todo.isDone?"취소":"완료"}
                </button>
              </div>
          </div>
          );
}

export default Todo;