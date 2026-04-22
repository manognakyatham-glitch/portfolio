import React from "react";
import profile from "./profile.jpg";  // image in same folder

function Home() {
  return (
    <div className="container">

      <h1 className="title">Manogna Kyatham</h1>

      {/* PROFILE IMAGE */}
      <img src={profile} alt="Profile" className="profile" />

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