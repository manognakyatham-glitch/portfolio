import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Manogna Kyatham</h1>
      <h2>Welcome to My Portfolio 🚀</h2>

      <p>I am a Computer Science student.</p>

      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
      </ul>

      <h3>Projects</h3>
      <p>Student Portal (Node.js + Express)</p>
      <p>KNN Classification Project</p>

      <h3>Contact</h3>
      <p>Email: your-email@gmail.com</p>
    </div>
  );
}

export default App;