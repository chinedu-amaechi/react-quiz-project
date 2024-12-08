// src/app/contexts/user-context.js

"use client";

const { createContext, useState, useContext } = require("react");

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("hook used outside of context");
  }

  return context;
}
