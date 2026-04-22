import profile from "./profile.jpg";
import React from "react";

function Home() {
  return (
    <div className="container">

      <h1 className="title">Manogna Kyatham</h1>

      {/* ✅ Profile Image */}
      <img 
  src={profile}
    alt="Profile"
    className="profile"
    />
      {/* About */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a B.Tech student at Mahindra University, interested in web development and modern technologies.
        </p>
      </div>

      {/* Research */}
      <div className="card">
        <h2>Research Interests</h2>
        <p>AI, Machine Learning, Web Development</p>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React, Node.js, Python</p>
      </div>

      {/* Personal Details */}
      <div className="card personal">
        <h2>Personal Details</h2>

        <div className="row">
          <span>Full Name</span>
          <span> Manogna Kyatham</span>
        </div>

        <div className="row">
          <span>Phone</span>
          <span> 9505816884</span>
        </div>

        <div className="row">
          <span>Email</span>
          <span> manogna.kyatham@gmail.com</span>
        </div>

        <div className="row">
          <span>College Email</span>
          <span> se23umcs032@mahindrauniversity.edu.in</span>
        </div>

        <div className="row">
          <span>University</span>
          <span> Mahindra University</span>
        </div>

        <div className="row">
          <span>Degree</span>
          <span> B.Tech - CSE</span>
        </div>

      </div>

    </div>
  );
}

export default Home;