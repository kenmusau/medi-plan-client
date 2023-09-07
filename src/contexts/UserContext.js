import React, { useState, useEffect, createContext }  from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
    
        fetch("/mepatient").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, [setUser]);
    
    return (
        <UserContext.Provider value = {{user, setUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider