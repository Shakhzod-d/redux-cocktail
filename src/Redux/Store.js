import { createStore } from "redux";
import reducer from "./CocktailReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(reducer, applyMiddleware(thunk));
