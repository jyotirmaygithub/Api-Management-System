import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

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
      <PaidOutlinedIcon style={iconStyle} />
      <Typography variant="h6" gutterBottom>
        Subscription Tier
      </Typography>
      <Typography variant="body1" gutterBottom>
        Daily Limit: 200
      </Typography>
      <Typography variant="body1" gutterBottom>
        Monthly Limit: 5000
      </Typography>
      <Typography variant="caption" color="textSecondary">
        * Enjoy our best-in-class service with advanced features and upgrade
        options available.
      </Typography>
    </Box>
  );
};

export default ApiUsageDetails;
