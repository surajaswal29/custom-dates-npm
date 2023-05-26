import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { demoReducer } from "./reducers/demoReducer";
// import { useDispatch, useSelector } from "react-redux";

const reducer = combineReducers({
  demo: demoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//Store -> Reducer -> Action (Redux Thunk)

//useDispatch() useSelector()

// Backend (API) -> Redux -> ReactJs

// Middleware
