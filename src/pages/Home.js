import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Manogna Kyatham</h1>
      <img src="/profile.jpg" alt="Profile" className="profile" />

      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a B.Tech student at Mahindra University, interested in web development and modern technologies.
        </p>
      </div>

      <div className="card">
        <h2>Research Interests</h2>
        <p>AI, Machine Learning, Web Development</p>
      </div>

      <div className="card">
        <h2>Personal Details</h2>
        <ul>
          <li>Phone: 9505816884</li>
          <li>Email: manogna.kyatham@gmail.com</li>
          <li>College Email: yourid@mahindrauniversity.edu.in</li>
          <li>Skills: HTML, CSS, JavaScript, React, Node.js, Python</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;