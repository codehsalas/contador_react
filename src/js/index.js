import React from "react";
import ReactDOM from "react-dom";
import "../styles/estilos.css";
import "bootstrap/dist/css/bootstrap.css";
import Contador from "./component/Contador.jsx";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<Contador seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
