import React, { useContext, createContext, useState } from "react";

const AppStates = createContext();

export function StatesFunction(props) {
  // Stores current user data.
  const [userDocument, setUserDocument] = useState({})
  const [apiRequest, setApiRequest] = useState({});

  return (
    <AppStates.Provider
      value={{ apiRequest, setApiRequest,userDocument,setUserDocument }}
    >
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
