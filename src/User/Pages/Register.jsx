import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // 👈 Default value
  const [userdata, setUserdata] = useState([]);

  const login = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((userdata) => {
        setUserdata(userdata);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();

    const checkuser = userdata.find((user) => user.name === name);
    if (checkuser) {
      toast.error("User already exists");
      return;
    }
    if (name === "") {
      toast.error("Please fill username");
      return;
    }

    const obj = { name, email, password, role }; // 👈 Include role in POST
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify(obj),
    }).then(() => {
      toast.success("User registered successfully 🎉");
      setName("");
      setEmail("");
      setPassword("");
      setRole("User");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Register
        </h2>

        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role (Default: User) */}
          <div>
            <label
              htmlFor="role"
              className="block text-gray-700 font-medium mb-2"
            >
              Role
            </label>
            <input
              type="text"
              value={role}
              readOnly
              className="w-full px-4 py-2 border rounded-xl bg-gray-100 text-gray-500 shadow-sm cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* Extra link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
            onClick={() => {
              login("/signin");
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
