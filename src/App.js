// import Counter from "./components/Counter/Counter"
// import TodoListView from "./components/Todo/TodoListView";
// import { RootStore, RootStoreProvider } from "./store/RootStore"
// const rootStore = new RootStore()

import { TodoList } from './views/TodoList/TodoList.tsx';
import { TodoStore } from './views/TodoList/TodoStore.ts';

function App() {
  return <div>
    <TodoList todoStore={TodoStore} />
  </div>
}

export default App
