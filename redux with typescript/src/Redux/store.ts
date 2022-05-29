import { legacy_createStore } from "redux";
import { notesReducer } from "./reducer";

export const store = legacy_createStore(notesReducer)