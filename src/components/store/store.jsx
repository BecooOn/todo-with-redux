import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todoReducer";

export const store = createStore(todoReducer);