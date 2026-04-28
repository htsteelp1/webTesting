import "./styles.css";
import {linkAbout} from "./pages/about.js";

let content = document.querySelector("#content");

let  header = document.createElement("h1");
header.innerText = "Test";
header.id = "mainH"
content.appendChild(header);
console.log(linkAbout);