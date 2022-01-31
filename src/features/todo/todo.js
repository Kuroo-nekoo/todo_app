import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
import TodoListItem from "./todo-list-item";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos.todos;
  });
  const addTodoInputRef = React.useRef();

  const onAddTodoClicked = () => {
    if (addTodoInputRef.current && addTodoInputRef.current.value !== "") {
      const value = addTodoInputRef.current.value;
      dispatch(addTodo({ value }));
      addTodoInputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={addTodoInputRef}></input>
      <button onClick={() => onAddTodoClicked()}>add</button>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo}></TodoListItem>;
      })}
    </div>
  );
};

export default Todo;
