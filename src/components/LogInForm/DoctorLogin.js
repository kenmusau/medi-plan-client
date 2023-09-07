import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LogInForm({ Loggeduser, onSetLoggedUser }) {
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // auto-login
    fetch("/mepatient").then((r) => {
      if (r.ok) {
        r.json().then((user) => onSetLoggedUser(user));
      }
    });
  }, [onSetLoggedUser]);

  function onSubmit(data) {
    fetch("/loginDoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // localStorage.setItem("loggedInUser", JSON.stringify(user));
          // localStorage.setItem("isAuthenticated", "true");
          navigate("/doctorDash", { state: { loggedInDoc: user } });
        });
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  }

  if (Loggeduser)
    return navigate("/doctorDash", { state: { loggedInDoc: Loggeduser } });

  return (
    <div className="hook_form">
      <Link as={Link} to="/" className="logo">
        <span className="logo_init">𝘔𝘦𝘥𝘪𝘤</span>
        <span className="logo_end">✙</span>
      </Link>
      <h2 className="hook_form_header">Doctor Login section.</h2>
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
            // pattern: {
            //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            //   message:
            //     "password: Minimum eight characters, at least one letter and one number",
            // },
          })}
        />
        <p className="error">{errors.password?.message}</p>
        <button className="hook_form_btn">Submit</button>
      </form>
      <p className="error">{error}</p>
    </div>
  );
}

export default LogInForm;
