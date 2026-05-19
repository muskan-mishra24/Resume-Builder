import { useState } from "react";
import API from "../api";

export default function CreateResume() {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");

  const createResume = async () => {
    await API.post("/resume/create", {
      title,
      content: { skills },
    });

    alert("Resume created!");
  };

  return (
    <div className="p-5">
      <h2>Create Resume</h2>

      <input
        placeholder="Resume Title"
        className="border p-2 m-2"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Skills (comma separated)"
        className="border p-2 m-2"
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={createResume} className="bg-green-500 text-white p-2">
        Save Resume
      </button>
    </div>
  );
}