import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, completeTodo } from "./todoSlice";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditTodo, setIsEditTodo] = React.useState();
  const editTodoInputRef = React.useRef();

  const onDeleteTodoClicked = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  const onEditTodoClicked = () => {
    if (editTodoInputRef.current && editTodoInputRef.current.value !== "") {
      dispatch(
        editTodo({ id: todo.id, value: editTodoInputRef.current.value })
      );
    }

    setIsEditTodo(false);
  };

  const onCompleteTodoClicked = () => {
    dispatch(completeTodo({ id: todo.id }));
  };

  return (
    <div>
      {isEditTodo ? (
        <>
          <input ref={editTodoInputRef}></input>
          <button onClick={() => onEditTodoClicked()}>edit</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              onCompleteTodoClicked();
            }}
          ></input>
          <div
            onClick={() => {
              setIsEditTodo(true);
            }}
            style={{ display: "inline-block" }}
          >
            {todo.value}
          </div>
          <button
            onClick={() => {
              onDeleteTodoClicked();
            }}
          >
            x
          </button>
        </>
      )}
    </div>
  );
};

export default TodoListItem;
