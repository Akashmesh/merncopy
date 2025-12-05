import { useState } from "react";
import {useNavigate} from "react-router-dom";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

 const handleSubmit = async(e) => {
  e.preventDefault();
  console.log(user);
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(user),
    });
    if(response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      alert("login successfull");
            setUser({
        email : "", password : ""
      });
      navigate("/");

    }else {
      alert("invalid credential");
    }
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <section className="page page--form">
      <main className="form-card">
        <h1 className="form-title">Login Here</h1>

        <form onSubmit={handleSubmit} className="form">
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
            Login
          </button>
        </form>
      </main>
    </section>
  );
};