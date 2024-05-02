import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { clrTodo } from "../store/todoReducer";

const TodoList = () => {

const todos = useSelector((state)=> state.todos) //? state.todos is the name of the reducer, and I used useSelector to get the todos from the store
// console.log(todos);

const dispatch = useDispatch(); //? this is a hook that allows us to dispatch actions to the store

  const handleClearList = () => {
    dispatch (clrTodo()); //? clrTodo is the name of the action, and I used useDispatch to dispatch the action to the store
  }

  return (
    <div>
      <div>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
