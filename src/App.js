import { Provider } from "react-redux";
import "./App.css";
import Todo from "./components/todo/Todo";
import { store } from "./components/store/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
