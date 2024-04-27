# API Management System Readme

Welcome to our API Management System! This system allows users to access and manage APIs securely. Before you can start using the APIs, you need to follow the authentication process outlined below.

## Authentication Process

1. **Create API Key:**
   - To access the APIs, you first need to create an API key. You can create an API key by navigating to the API management dashboard and selecting the "Create API Key" option.
   - Upon creation, you will receive a unique API key which you will use to authenticate your requests.

2. **Obtain Auth Token:**
   - Additionally, authentication requires an auth token which is obtained through the browser cookie. After successful login to our system, the auth token will be stored in your browser's cookies.
   - Make sure to have cookies enabled in your browser to automatically retrieve the auth token.

## Fetching Data

Once you have obtained both the API key and the auth token, you can start fetching data using our APIs.

1. **Documentation:**
   - Refer to our API documentation for detailed information on available endpoints and request parameters.
   - The documentation will provide examples of how to structure your requests including the required headers such as API key and auth token.

2. **Authentication Headers:**
   - Include the API key and auth token in the headers of your API requests.
   - Ensure that the headers are correctly formatted and included in every request to authenticate yourself and access the data securely.

## Example Request

```javascript
async function fetchData() {
  try {
    const apiKey = "YOUR_API_KEY";
    const authToken = "YOUR_AUTH_TOKEN";
    const apiUrl = `https://api-management-system.onrender.com/api/data`;

    // Make a GET request to the API with the authentication headers
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "API-Key": apiKey,
        "Authorization": `Bearer ${authToken}`,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response data
    const fetchedData = await response.json();
    console.log("Fetched data:", fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
fetchData();
