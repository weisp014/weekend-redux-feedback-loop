import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingRating = (state = 0, action) => {
  if (action.type === "NEW_FEELING_RATING") {
    return action.payload;
  } else if (action.type === "RESET_FEEDBACK") {
    return 0;
  }
  return state;
};

const understandingRating = (state = 0, action) => {
  if (action.type === "NEW_UNDERSTANDING_RATING") {
    return action.payload;
  } else if (action.type === "RESET_FEEDBACK") {
    return 0;
  }
  return state;
};

const supportedRating = (state = 0, action) => {
  if (action.type === "NEW_SUPPORTED_RATING") {
    return action.payload;
  } else if (action.type === "RESET_FEEDBACK") {
    return 0;
  }
  return state;
};

const comments = (state = "", action) => {
  if (action.type === "NEW_COMMENTS") {
    return action.payload;
  } else if (action.type === "RESET_FEEDBACK") {
    return "";
  }
  return state;
};

const feedback = (state = [], action) => {
  if (action.type === "GET_FEEDBACK") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    //list of reducers here
    feelingRating,
    understandingRating,
    supportedRating,
    comments,
    feedback,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
