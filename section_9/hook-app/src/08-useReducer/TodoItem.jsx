import React from "react";

export const TodoItem = ({data}) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
    >
      <span className="align-self-center">{data.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
