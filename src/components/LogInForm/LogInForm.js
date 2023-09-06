import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function LogInForm() {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setIsLoading(true);
    fetch("/login", {
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
          // localStorage.setItem("loggedInUser", JSON.stringify(user));
          // localStorage.setItem("isAuthenticated", "true");
          navigate("/appointments", { state: { loggedInUser: user } });
        });
      } else {
        r.json().then((err) => setError(err.errors));
      }
    });
  }

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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "password: Minimum eight characters, at least one letter and one number",
            },
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
      <DevTool control={control} />
    </div>
  );
}

export default LogInForm;
