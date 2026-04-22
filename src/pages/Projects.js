import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card">
        <h3>Fake News Detection using NLP</h3>
        <p>
          Built an NLP-based model to classify news articles as Fake or Real using machine learning and Streamlit.
        </p>
        <a href="/" onClick={(e) => e.preventDefault()}>
          View Project
        </a>
      </div>

      <div className="card">
        <h3>Utility Bill Management System</h3>
        <p>
          Developed a Java Swing application to manage utility bills with features like add, delete, search, and filter.
        </p>
        <a href="/" onClick={(e) => e.preventDefault()}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default Projects;