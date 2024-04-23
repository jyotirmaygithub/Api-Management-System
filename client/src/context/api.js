import React, { createContext, useContext } from "react";
import { TokenStatusContext } from "../context/tokenStatus";
import { StateContext } from "./States";

const APIContext = createContext();

export function APIProvider(props) {
  const { getAuthToken } = TokenStatusContext();
  const { setApiKey } = StateContext();

  async function handleCreateAPI() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/apiKey/createAPI`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const APIKey = await response.json();
      setApiKey(APIKey);
      return { success: true, message: "Key created successfully!" };
    } catch (error) {
      console.error("Error creating API key:", error);
      return { success: false, message: error.message };
    }
  }

  async function handleDeleteAPI() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/apiKey/deleteAPI`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return { success: true, message: "Key has been deleted successfully!" };
    } catch (error) {
      console.error("Error creating API key:", error);
      return { success: false, message: error.message };
    }
  }

  async function handleFetchingAPI() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/apiKey/APIKey`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": getAuthToken(),
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const apiKey = await response.json();
      setApiKey(apiKey.userDocument.apiKeys)
      console.log("api key of the fetching = ",apiKey.userDocument.apiKeys)
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  }
  return (
    <APIContext.Provider value={{ handleCreateAPI, handleDeleteAPI,handleFetchingAPI }}>
      {props.children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  return useContext(APIContext);
}
