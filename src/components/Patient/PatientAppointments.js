import React, { useState, useEffect } from "react";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/api/patientAppointments")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div>
      <h1>Your Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            Date: {appointment.date}, Time: {appointment.time}, Description:{" "}
            {appointment.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientAppointments;
