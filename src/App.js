import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Manogna Kyatham</h1>
      <h2>Welcome to My Portfolio 🚀</h2>
      <p>I am a Computer Science student.</p>
      <p>This is my deployed website using GitHub Pages.</p>
    </div>
  );
}

export default App;