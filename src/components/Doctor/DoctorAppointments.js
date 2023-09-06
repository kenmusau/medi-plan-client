import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const {doctorId } = useParams(); 

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [doctorId]);

  return (
    <div className="doctor-appointments">
      <h1>Doctor's Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <h2>Patient: {appointment.patient.name}</h2>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorAppointments;
