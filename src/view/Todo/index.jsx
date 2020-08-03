import React from "react";

import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";

import "./Todo.css";

export const Todo = ({ todo, handleTodoChange, handleTodoDelete }) => {
  return (
    <div key={todo.id} className="todo">
      <Checkbox
        id={`checkbox-${todo.id}`}
        isChecked={todo.checked}
        onChange={() => handleTodoChange(todo.id)}
        label={todo.label}
      />
      <Button className="delete-btn" onClick={() => handleTodoDelete(todo.id)}>
        x
      </Button>
    </div>
  );
};
