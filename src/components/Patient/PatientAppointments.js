import React, { useState, useEffect } from "react";

function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    description: "",
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    fetch("API")
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

        const handleEditAppointment = (appointment) => {
          setEditingAppointment(appointment);
          setNewAppointment(appointment); 
        };

        const handleUpdateAppointment = () => {
          if (editingAppointment) {
            fetch(`/api/updateAppointment/${editingAppointment.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editingAppointment),
            })
              .then(() => {
                setEditingAppointment(null);
              })
              .catch((error) => console.error("Error updating appointment:", error));
          }
        };

        const handleDeleteAppointment = (appointmentId) => {
            fetch("API", {
              method: "DELETE",
            })
              .then(() => {
                console.log(`Appointment with ID ${appointmentId} deleted successfully.`);
              })
              .catch((error) =>
                console.error(`Error deleting appointment with ID ${appointmentId}:`, error)
              );
          }
        
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
                  <button onClick={() => handleEditAppointment(appointment)}>
                  <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
                    Edit
                  </button>
                </li>
              ))}
            </ul>
            {editingAppointment && (
              <div>
                <h2>Edit Appointment</h2>
                <form>
                  <div>
                    <label>Date:</label>
                    <input
                      type="date"
                      name="date"
                      value={editingAppointment.date}
                      onChange={(e) =>
                        setEditingAppointment({
                          ...editingAppointment,
                          date: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label>Time:</label>
                    <input
                      type="time"
                      name="time"
                      value={editingAppointment.time}
                      onChange={(e) =>
                        setEditingAppointment({
                          ...editingAppointment,
                          time: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label>Description:</label>
                    <textarea
                      name="description"
                      value={editingAppointment.description}
                      onChange={(e) =>
                        setEditingAppointment({
                          ...editingAppointment,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <button onClick={handleUpdateAppointment}>Update</button>
                  <button onClick={() => setEditingAppointment(null)}>Cancel</button>
                </form>
              </div>
            )}
          </div>
        );
      }

export default PatientAppointments;
