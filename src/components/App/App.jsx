import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import Review from "../Review/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <FeelingForm />
        </Route>
        <Route path="/understanding">
          <UnderstandingForm />
        </Route>
        <Route path="/supported">
          <SupportedForm />
        </Route>
        <Route path="/comments">
          <CommentsForm />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/complete">
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
