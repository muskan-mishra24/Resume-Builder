import { useEffect, useState } from "react";
import API from "../api";

export default function MyResumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/resume/my");
      setResumes(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h2>My Resumes</h2>

      {resumes.map((r) => (
        <div key={r._id} className="border p-3 m-2">
          <h3 className="font-bold">{r.title}</h3>
          <pre>{JSON.stringify(r.content, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}