import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "./rootReducers";
import { thunk } from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
