import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "./todoSlice";

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

  return (
    <div>
      {isEditTodo ? (
        <>
          <input ref={editTodoInputRef}></input>
          <button onClick={() => onEditTodoClicked()}>edit</button>
        </>
      ) : (
        <div
          onClick={() => {
            setIsEditTodo(true);
          }}
        >
          {todo.value}
          <button
            onClick={() => {
              onDeleteTodoClicked();
            }}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
