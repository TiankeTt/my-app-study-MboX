import Counter from "./components/Counter/Counter"
import TodoListView from "./components/Todo/TodoListView";
import { RootStore, RootStoreProvider } from "./store/RootStore"
const rootStore = new RootStore()

function App() {
  return (
    <RootStoreProvider store={rootStore}>
      <TodoListView />
    </RootStoreProvider>
  )
}

export default App
