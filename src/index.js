import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from "./pages/projects";
import Home from "./pages/home";

const theme = extendTheme({
  fonts: {
    body: "bebas neue"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <Router>
          <Routes>
            <Route path="/" element={<App />}> 
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />} />
            </Route>
          </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
