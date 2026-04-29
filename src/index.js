import "./styles.css";
import {loadAbout} from "./pages/about.js";

let body = document.querySelector("body");

let  header = document.createElement("h1");
header.innerText = "Test";
header.id = "mainH"
body.insertBefore(header, body.firstChild)

loadAbout();