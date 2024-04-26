import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ApiUsageDetails = () => {
  return (
    <div>
      <Box
        boxShadow={3}
        p={2}
        m={2}
        textAlign="center"
        borderRadius={8}
        bgcolor="background.paper"
      >
        <Typography
          variant="h6"
          style={{ marginBottom: "10px", color: "blue" }}
        >
          Subscription Tier
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "5px" }}>
          Daily Limit: 200
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "5px" }}>
          Monthly Limit: 5000
        </Typography>
      </Box>
    </div>
  );
};

export default ApiUsageDetails;
