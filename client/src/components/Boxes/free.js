import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";

const ApiUsageDetails = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "16px", // You can adjust the padding as needed
    margin: "16px", // You can adjust the margin as needed
    borderRadius: "8px",
    backgroundColor: "#ffffff", // You can change the background color
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)", // You can adjust the shadow
  };

  const iconStyle = {
    marginBottom: "8px", // You can adjust the spacing
    color: "#1976d2", // You can adjust the color
    fontSize: "40px",
  };

  return (
    <Box style={containerStyle}>
      <InfoIcon style={iconStyle} />
      <Typography variant="h6" gutterBottom>
        Free Tier Usage
      </Typography>
      <Typography variant="body1" gutterBottom>
        Daily Limit: 50
      </Typography>
      <Typography variant="body1" gutterBottom>
        Monthly Limit: 200
      </Typography>
      <Typography variant="caption" color="textSecondary">
        * Free service available for 3 months from the date of first API usage.
      </Typography>
    </Box>
  );
};

export default ApiUsageDetails;
