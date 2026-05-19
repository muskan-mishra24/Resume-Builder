import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/">Create Resume</Link>
      <Link to="/my">My Resumes</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}