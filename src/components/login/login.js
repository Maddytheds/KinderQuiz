import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8000/users");
      const users = response?.data;

      const user = users.find(
        (user) =>
          user.userName === formData.userName &&
          user.password === formData.password
      );
      if (user) {
        let id = user.id;
        console.log(id);
        localStorage.setItem("token",id)
        setSuccess("Login successful!");
        setError("");

        navigate("/home");
      } else {
        setError("Invalid username or password");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="signup">
          <div className="signup-heading">
            <h1>Login</h1>
            <p>
              Login an account to enjoy all the Quizzes without any ads for
              free!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={(event) =>
                setFormData({ ...formData, userName: event.target.value })
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            <button>Login</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <a className="login-link" href="/signup">
            Create an account?
          </a>
        </div>
      </div>
    </div>
  );
}
