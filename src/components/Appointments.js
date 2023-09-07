import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Appointments({ onSetLoggedUser }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onSetLoggedUser(null);
        navigate("/login");
      }
    });
  }
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("isAuthenticated");
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // });

  // function goToLogin() {
  //   navigate("/login");
  // }
  const user = state.loggedInUser;
  console.log(user);
  // const localStorageUser = localStorage.getItem("loggedInUser")
  //   ? localStorage.getItem("loggedInUser")
  //   : {};
  // console.log(localStorageUser);

  // const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <div>
      <h1>Appontments</h1>
      <p>Welcome {user.username}</p>
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}

export default Appointments;
