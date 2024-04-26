import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StateContext } from "../../context/States";

export default function FirstDate() {
  const { apiRequest } = StateContext();
  const [lastDay, setLastDay] = useState(null);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  };

  useEffect(() => {
    if (apiRequest.requests && apiRequest.requests.length > 0) {
      const firstDate = new Date(apiRequest.requests[0].timestamp);
      const lastDate = new Date(
        firstDate.getFullYear(),
        firstDate.getMonth() + 3,
        firstDate.getDate()
      ); 
      setLastDay(lastDate.toISOString().split("T")[0]);
    }
  }, [apiRequest]);

  return (
    <Box style={containerStyle}>
      <Typography variant="h6" gutterBottom>
        Last day of free tier access: {lastDay}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        * The free tier usage period has expired as of the last date.
      </Typography>
    </Box>
  );
}
