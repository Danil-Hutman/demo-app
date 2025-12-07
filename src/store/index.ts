import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  products: reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
