import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import DoctorLogin from "./components/LogInForm/DoctorLogin";
import Appointments from "./components/Appointments";
import DoctorDash from "./components/DoctorDash";
// import { useState, useEffect } from "react";
function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} /> ;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/doctorLogin" element={<DoctorLogin />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctorDash" element={<DoctorDash />} />
      </Routes>
    </div>
  );
}

export default App;
