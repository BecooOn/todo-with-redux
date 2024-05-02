import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoReducer";

const TodoInput = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch(); //? this is a hook that allows us to dispatch actions to the store

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch({ type: "ADD", payload: text }) //? this is how we dispatch an action to the store
    dispatch(addTodo(text)) //? And,the other usage is here for the reducer
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  )
}

export default TodoInput
