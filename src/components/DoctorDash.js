import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";


function DoctorDash() {
  const { state } = useLocation();
  const doc = state.loggedInDoc;
  const [patients, setPatients] = useState([]);
  console.log(doc);

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1>DoctorDash</h1>
      <p>welcome {doc.full_name}</p>
      <h2>Doctor's Appointments</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <h3>Patient: {patient.full_name}</h3>
            <p>Date of Birth: {moment(patient.dob).format('MMMM Do YYYY')}</p>
            <p>Gender: {patient.gender}</p>
            <h4>Appointments</h4>
            {patient.appointments.map(appointment => (
              <ul key={appointment.id}>
                <p>Date: {moment(appointment.date_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>Description: {appointment.description}</p>
                </ul>
            )
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDash;
