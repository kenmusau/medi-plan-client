import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./signUpForm.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        dob: data.dob,
        gender: data.gender,
        full_name: data.full_name,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // r.json().then((user) => onLogin(user));
        r.json().then((user) => console.log(user));
        reset();
        alert("Registration successful!");
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
      <h2 className="hook_form_header">Enter your Details to register.</h2>
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
        <label htmlFor="full_name">Full Names</label>
        <input
          type="text"
          id="full_name"
          {...register("full_name", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="error">{errors.full_name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Username is required",
            },
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Enter correct Email format",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            // valueAsDate: true,
            required: {
              value: true,
              message: "Your date of birth is required",
            },
          })}
        />
        <p className="error">{errors.dob?.message}</p>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "password is required" },
<<<<<<< HEAD
=======
            // pattern: {
            //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            //   message:
            //     "password: Minimum eight characters, at least one letter and one number",
            // },
>>>>>>> d08ad5bbcf51cba0e8d6391031ef61a2a02dd666
          })}
        />
        <p className="error">{errors.password?.message}</p>

        <button className="hook_form_btn" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="redirect_button">
            Log In
          </Link>
        </p>
        <p className="error">{error}</p>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default SignUpForm;
