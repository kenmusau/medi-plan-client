import React, { useState, useEffect } from "react";

function DoctorAppointments() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="doctor-appointments">
      <h1>Doctor's Appointments</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <h2>Patient: {patient.username}</h2>
            <p>Date of Birth: {patient.dob}</p>
            <p>Gender: {patient.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorAppointments;
