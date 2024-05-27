import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const field in formData) {
      if (formData[field].trim() === "") {
        setError(`Please fill in ${field}`);
        return;
      }
    }
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8000/users",
        formData
      );
      console.log(response.data);
      setFormData(
        {
          userName: "",
          email: "",
          password: "",
        },
        navigate("/login")
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-heading">
          <h1>Create An Account</h1>
          <p>
            Create an account to enjoy all the Quizzes without any ads for free!
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
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
          <button>Create Account</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <a className="login-link" href="/login">
          Already have an account?
        </a>
      </div>
    </div>
  );
}
