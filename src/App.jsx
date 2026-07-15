import { useState } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");

  const skills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
    { id: 5, name: "AWS" },
    { id: 6, name: "C++" },
    { id: 7, name: ".NET" },
    { id: 8, name: "DevOps" },
    { id: 9, name: "Linux" },
  ];

  return (
    <div className="app-container">
      <h1>My Mini Profile</h1>

      <input
        type="text"
        placeholder="Enter your status..."
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <br />
      <br />

      <ProfileCard
        name="Shaurya Dhingra"
        bio="I am into backend, cloud, and DevOps, and currently learning React."
        status={status}
        skills={skills}
      />
    </div>
  );
}

export default App;