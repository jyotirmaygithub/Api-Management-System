import React, { useContext, createContext, useState } from "react";

const AppStates = createContext();

export function StatesFunction(props) {
  // Stores current user data.
  const [userDocument, setUserDocument] = useState({})
  const [ApiKey, setApiKey] = useState(null);

  return (
    <AppStates.Provider
      value={{ ApiKey, setApiKey,userDocument,setUserDocument }}
    >
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
