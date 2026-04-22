import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1 className="title">My Projects</h1>

      {/* Project 1 */}
      <div className="card project-card">
        <h3>Fake News Detection using NLP</h3>
        <p>
          Built an NLP-based model to classify news as Fake or Real using machine learning.
        </p>

        <div className="tags">
          <span>Python</span>
          <span>NLP</span>
          <span>Machine Learning</span>
        </div>

        <a
         href="https://github.com/manognakyatham-glitch/Fake-news-Detection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">View on GitHub</button>
        </a>
      </div>

      {/* Project 2 */}
      <div className="card project-card">
        <h3>Utility Bill Management System</h3>
        <p>
          Java-based application to manage bills with add, delete, and search features.
        </p>

        <div className="tags">
          <span>Java</span>
          <span>Swing</span>
          <span>OOP</span>
        </div>

        <a
         href="https://github.com/manognakyatham-glitch/utility-bill-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">View on GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default Projects;