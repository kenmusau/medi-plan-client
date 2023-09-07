import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { baseUrl } from "../../utlis";

function LogInForm({ Loggeduser, onSetLoggedUser }) {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    
    fetch(`${baseUrl}/mepatient`).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSetLoggedUser(user));
      }
    });
  }, [onSetLoggedUser]);

  console.log(Loggeduser);

  function onSubmit(data) {
    setIsLoading(true);
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate("/appointments", { state: { loggedInUser: user } });
        });
      } else {
        r.json().then((err) => setError(err.errors));
      }
    });
  }

  console.log(Loggeduser);

  if (Loggeduser)
    return navigate("/appointments", { state: { loggedInUser: Loggeduser } });

  return (
    <div className="hook_form">
      <Link as={Link} to="/" className="logo">
        <span className="logo_init">𝘔𝘦𝘥𝘪𝘤</span>
        <span className="logo_end">✙</span>
      </Link>
      <h2 className="hook_form_header">Enter your Details to login.</h2>
      <form className="sign_up_form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
        />
        <p className="error">{errors.password?.message}</p>
        <button className="hook_form_btn" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="redirect_button">
            Sign Up
          </Link>
        </p>
      </form>
      <p className="error">{error}</p>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </div>
  );
}

export default LogInForm;
