const initialState = {
  todos: [{ id: new Date().getTime(), text: "Learn Redux", completed: false }],
};

//! these are the actions for the reducer
const ADD = "ADD";
const DEL = "DELETE";
const CLR = "CLEAR";
const DONE = "DONE";

export const addTodo = (payload) => ({ type: ADD, payload });
export const delTodo = (payload) => ({ type: DEL, payload });
export const clrTodo = () => ({ type: CLR });
export const doneTodo = (payload) => ({ type: DONE, payload });
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DEL:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload), //payload is the id of the todo to be deleted
      };
    case CLR:
      return initialState;
    case DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};