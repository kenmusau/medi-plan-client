import React, { useState, useEffect } from "react";

function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="patients-list">
      <h1>Patients List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <h2>Name: {patient.name}</h2>
            <p>Date of Birth: {patient.dateOfBirth}</p>
            <p>Gender: {patient.gender}</p>
            {/* Add more patient information here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientsList;
