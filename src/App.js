import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DoctorAppointments from "./components/Doctor/DoctorAppointments";
import PatientAppointments from "./components/Patient/PatientAppointments";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/" element={<DoctorAppointments/>} />
        <Route path="/patient/:id" element={<PatientAppointments/>} />
      </Routes>
    </div>
  );
}

export default App;
