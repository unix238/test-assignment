import { createStore } from "redux";
import rootReducer from "./reducers/productReducer";

export const store = createStore(rootReducer);
