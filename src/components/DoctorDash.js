import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DoctorDash({ onSetLoggedUser }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onSetLoggedUser(null);
        navigate("/doctorLogin");
      }
    });
  }
  const doc = state.loggedInDoc;
  console.log(doc);
  return (
    <div>
      <h1>DoctorDash</h1>
      <p>welcome {doc.full_name}</p>
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}

export default DoctorDash;
