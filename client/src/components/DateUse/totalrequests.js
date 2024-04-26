import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StateContext } from "../../context/States";

export default function TotalRequests() {
  const { apiRequest } = StateContext();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  }

  const totalRequests = apiRequest.requests && apiRequest.requests.length;

  return (
    <Box style={containerStyle}>
      <Typography variant="h6" gutterBottom>
        Total API Requests
      </Typography>
      <Typography variant="body1" gutterBottom>
        Total: {totalRequests}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        * Free tier access unlocked.
      </Typography>
    </Box>
  );
}
