import React from "react";
import './style.css';
import Todo from '../todo/Todo';



function List({todos,setTodos}){
    const onDeleteHandler = (todoId)=>{
        const newTodos = todos.filter((todo)=>{
            return todo.id !== todoId;
        })
        setTodos(newTodos)
    }
    const onEditHandler =(todoId)=>{
        const newTodos = todos.map((todo)=>{
            if(todo.id === todoId){
                return{
                    ...todo,isDone: !todo.isDone,
                };
            }else{
                return {...todo};
            }
        });
        setTodos(newTodos);
    };
    return (<div className="listWrap">
                <div className="content">
                    <h2 className="listTitle">Working</h2>
                    <div className="list">
                    {todos.map((todo) => {
                        if (!todo.isDone) {
                            return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                            );
                        } else {
                            return null;
                        }
                    })}
                    </div>
                </div>
                <div className="content">
                    <h2 className="listTitle">Done</h2>
                    <div className="list">
                    {todos.map((todo) => {
                        if (todo.isDone) {
                            return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                            );
                        } else {
                            return null;
                        }
                    })}
                    </div>
                </div>
           </div>
           );
}
export default List;