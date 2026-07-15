import { useState } from "react";

function ProfileCard({ name, bio, status, skills }) {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="profilecard">
      <h2>{name}</h2>

      <p>{bio}</p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      {showMore && (
        <p>
          I am into backend development, cloud, and DevOps, and I am currently
          learning React to build strong full-stack skills.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>

      <hr />

      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>

      <hr />

      <button onClick={() => setLikes(likes + 1)}>♥ Like</button>
      <p>{likes} likes</p>
    </div>
  );
}

export default ProfileCard;