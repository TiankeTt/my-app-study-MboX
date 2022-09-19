import { action, computed, makeObservable, observable } from "mobx";

interface TodoItem {
  id: number;
  title: string;
  complete: boolean;
}

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodos: action,
      toggleTodo: action,
      status: computed,
    });
  }

  addTodos(title: string) {
    const item: TodoItem = {
      id: +Math.random().toFixed(4),
      title,
      complete: false,
    };
    this.todos.push(item);
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].complete = !this.todos[index].complete;
    }
  }

  get status() {
    let completed = 0,
      remaining = 0;
    this.todos.forEach((item) => {
      if (item.complete) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { completed, remaining };
  }
}

export const TodoStore = new TodoStoreImpl();
