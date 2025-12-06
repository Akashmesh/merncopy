import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const {storeTokenInLS} = useAuth();

const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("response data", response);
    if (response.ok) {
      const responseData = await response.json();
      storeTokenInLS(responseData.token);
      alert("registration successful");
    navigate("/");
      setUser({ username: "", email: "", phone: "", password: "" });
      console.log(responseData);
    } else {
      // const errorData = await response.json().catch(() => null);
      console.log("error inside response");
      alert(errorData?.msg || "Registration failed");
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <section className="page page--form">
      <main className="form-card">
        <h1 className="form-title">Register Here</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              value={user.username}
              onChange={handleInput}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="form-input"
              value={user.phone}
              onChange={handleInput}
              placeholder="Enter phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              value={user.password}
              onChange={handleInput}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn--primary form-button">
            Register
          </button>
        </form>
      </main>
    </section>
  );
};