import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CostsContainer from "./СostsContainer/CostsContainer";
import NewsContainer from "./NewsContainer/NewsContainer";

import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={CostsContainer} />
        <Route path="/news" component={NewsContainer} />
      </Router>
    </div>
  );
};

export default App;
