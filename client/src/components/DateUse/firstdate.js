import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StateContext } from "../../context/States";

export default function FirstDate() {
  const { apiRequest } = StateContext();
  const [firstDay, setFirstDay] = useState(undefined);

  useEffect(() => {
    if (apiRequest.requests && apiRequest.requests.length > 0) {
      setFirstDay(apiRequest.requests[0].timestamp.split("T")[0]);
    }
  }, [apiRequest.requests]);

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

  // Extracting the timestamp of the first API call

  return (
    <Box style={containerStyle}>
      <Typography variant="h6" gutterBottom>
        First API Usage Date
      </Typography>
      <Typography variant="body1" gutterBottom>
        Congratulations on making your first API call! Date:{" "}
        {apiRequest.requests ? firstDay : ""}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        * You've unlocked access to our free tier usage.
      </Typography>
    </Box>
  );
}
