import React from "react";
import profile from "./profile.jpg";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero">
        <h1> ManognaKyatham</h1>
        <p>
      
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="container">

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="profile"
        />

        {/* About */}
        <div className="card">
          <h2>About Me</h2>
          <p>
            I am a B.Tech CSE student at Mahindra University interested in
            machine learning and web development.
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
            <span>📞 Phone:</span>
            <span>9505816884</span>
          </div>

          <div className="row">
            <span>📧 Email:</span>
            <span>manogna.kyatham@gmail.com</span>
          </div>

          <div className="row">
            <span>🎓 University:</span>
            <span>Mahindra University</span>
          </div>

          <div className="row">
            <span>📘 Degree:</span>
            <span>B.Tech - CSE</span>
          </div>

        </div>

      </div>
    </div>
   
  );
}

export default Home;