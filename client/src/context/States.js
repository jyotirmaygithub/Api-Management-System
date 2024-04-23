import React, { useContext, createContext, useState } from "react";

const AppStates = createContext();

export function StatesFunction(props) {
  // Stores current user data.
  const [ApiKey, setApiKey] = useState(null);

  return (
    <AppStates.Provider
      value={{ ApiKey, setApiKey }}
    >
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
