import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Typewriter } from "react-simple-typewriter";
var testing = 2500;
const styleBG = { color: "#ecf0f1", backgroundColor: "#2c3e50" };
ReactDOM.render(
  <React.StrictMode style={styleBG}>
    <div className="typewriter1">
      <Typewriter
        words={["Bienvenid@, ¡Iniciando sistema!", "¡Iniciado!", ""]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={100 - testing}
        deleteSpeed={70 - testing}
        delaySpeed={5000 - testing - testing}
        onLoopDone={() => {
          document.getElementsByClassName("AppHidden")[0].className = "App";
          document.getElementsByClassName("typewriter1")[0].innerHTML = "";
        }}
      />
    </div>
    <div className="AppHidden">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
