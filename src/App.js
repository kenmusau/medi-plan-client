import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import DoctorLogin from "./components/LogInForm/DoctorLogin";
// import { useState, useEffect } from "react";
// import Login from "./components/Login/Login";
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

  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/doctorLogin" element={<DoctorLogin />} />
      </Routes>
    </div>
  );
}

export default App;
