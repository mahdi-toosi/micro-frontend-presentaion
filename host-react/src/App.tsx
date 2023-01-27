import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router";

import "./index.css";

const App = () => (
    <div className="container">
        <div>Name: host-react</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
        <Router />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
