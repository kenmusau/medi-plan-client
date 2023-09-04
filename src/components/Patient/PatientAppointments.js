import React, { useState, useEffect } from "react";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    description: "",
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    fetch("API", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
    })
        .then((res) => res.json())
        .then((data) => {
            setAppointments([...appointments, data]);
            setNewAppointment({
                date: "",
                time: "",
                description: "",
            });
        })
        .catch((error) => console.error("Error creating appointment:", error));
        };
    


  return (
    <div>
      <h1>Your Appointments</h1>
      <form onSubmit={handleCreateAppointment}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={newAppointment.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Appointment</button>
      </form>
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
