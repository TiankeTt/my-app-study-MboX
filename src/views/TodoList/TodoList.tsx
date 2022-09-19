import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { TodoStoreImpl } from "./TodoStore";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

export const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [value, setValue] = useState<string>("");

  const status = todoStore.status;

  return (
    <>
      <div style={{ padding: "20px" }}>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            if (value) {
              todoStore.addTodos(value);
              setValue("");
            }
          }}
        >
          submit
        </button>
      </div>
      Completed：{status.completed}
      <br />
      Remaining：{status.remaining}
      <ul>
        {todoStore.todos.map((todo) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                todoStore.toggleTodo(todo.id);
              }}
            >
              [ {todo.complete ? "x" : ""} ] {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
});
