import { createContext, useState, useContext } from "react";

const UserContext = createContext(); // Create a context

/* 
  This is the provider component.
  It provides the cart state to all components that need it.
*/
export const UserProvider = ({ children }) => {
  const user = useUserProvider();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext); // Hook to access the cart state

/* 
  This are the values that are provided to the consumer.
*/
export const useUserProvider = () => {
  const [user, setUser] = useState();

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
    setUser,
    logoutUser,
  };
};
