import React from "react";
import ReactDOM from "react-dom";
import Nav from './components/Nav';
import "./index.css";

const App = () => <div>
    <Nav></Nav>
    <div>Hi there, I'm Consumer</div>
    <div>App component</div>
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
