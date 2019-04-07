import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Clients from "./clients/Clients";
import "../scss/main.scss";

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Clients />
			</div>
		);
	}
}

if (document.getElementById("main")) {
	ReactDOM.render(<Main />, document.getElementById("main"));
}
