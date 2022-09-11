import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({data}) => {
  return (
    <ul className="list-group">
      {data.map((todo) => (
        <TodoItem key={todo.id} data={todo}/>
      ))}
    </ul>
  );
};
