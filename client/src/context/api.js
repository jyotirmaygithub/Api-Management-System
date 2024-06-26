import React, { createContext, useContext, useEffect } from "react";
import { TokenStatusContext } from "../context/tokenStatus";
import { StateContext } from "./States";

const APIContext = createContext();

export function APIProvider(props) {
  const { getAuthToken } = TokenStatusContext();
  const { setApiRequest, setUserDocument } = StateContext();

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
      const userDocument = await response.json();
      setUserDocument(userDocument.userDocument);
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
      handleFetchingAPI();
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
      const userDocument = await response.json();
      setUserDocument(userDocument.userDocument);
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  }

  // Fetch data only with api key of the user.
  async function fetchData() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/data/fetchData/${process.env.REACT_APP_API_KEY}`,
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

      const fetchedTasks = await response.json();
      console.log("fetched data = ", fetchedTasks);
    } catch (error) {
      console.error("Error fetching Tasks:", error);
    }
  }

  async function totalRequests() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/data/api-requests`,
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

      const apiRequestDoc = await response.json();
      setApiRequest(apiRequestDoc)
    } catch (error) {
      console.error("Error fetching Tasks:", error);
    }
  }

  return (
    <APIContext.Provider
      value={{ handleCreateAPI, handleDeleteAPI, handleFetchingAPI, fetchData,totalRequests }}
    >
      {props.children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  return useContext(APIContext);
}
