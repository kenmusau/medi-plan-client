import React from "react";
import { useLocation } from "react-router-dom";

function DoctorDash() {
  const { state } = useLocation();
  const doc = state.loggedInDoc;
  console.log(doc);
  return (
    <div>
      <h1>DoctorDash</h1>
      <p>welcome {doc.full_name}</p>
    </div>
  );
}

export default DoctorDash;
