import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingRating = (state = 0, action) => {
    if(action.type === 'NEW_FEELING_RATING') {
        return action.payload;
    }
    return state;
}

const understandingRating = (state = 0, action) => {
    if(action.type === 'NEW_UNDERSTANDING_RATING') {
        return action.payload;
    }
    return state;
}

const supportedRating = (state = 0, action) => {
    if(action.type === 'NEW_SUPPORTED_RATING') {
        return action.payload;
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
      //list of reducers here
      feelingRating,
      understandingRating,
      supportedRating
    }),
    applyMiddleware(logger)
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
