import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import DoctorLogin from "./components/LogInForm/DoctorLogin";
import Appointments from "./components/Appointments";
import DoctorDash from "./components/DoctorDash";
import { useState } from "react";
function App() {
  const [Loggeduser, setLoggedUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route
          path="/login"
          element={
            <LogInForm
              Loggeduser={Loggeduser}
              onSetLoggedUser={setLoggedUser}
            />
          }
        />
        <Route
          path="/doctorLogin"
          element={
            <DoctorLogin
              Loggeduser={Loggeduser}
              onSetLoggedUser={setLoggedUser}
            />
          }
        />
        <Route
          path="/appointments"
          element={<Appointments onSetLoggedUser={setLoggedUser} />}
        />
        <Route
          path="/doctorDash"
          element={<DoctorDash onSetLoggedUser={setLoggedUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
