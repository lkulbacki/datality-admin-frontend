import "./style.scss";
import App from './App';
import React from "react";
import { render } from "react-dom";
import { getProducts } from "./common/productsAPI";


getProducts().then(json => console.log(json));

render(<App />, document.getElementById("root"));
