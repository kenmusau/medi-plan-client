import React from "react";
import { useLocation } from "react-router-dom";

function Appointments() {
  const { state } = useLocation();
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
    </div>
  );
}

export default Appointments;
