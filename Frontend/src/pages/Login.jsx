import { useState } from "react";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    alert("Login successful!");
  };

  return (
    <div className="p-5">
      <h2>Login</h2>

      <input
        placeholder="Email"
        className="border p-2 m-2"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        className="border p-2 m-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginUser} className="bg-blue-500 text-white p-2">
        Login
      </button>
    </div>
  );
}