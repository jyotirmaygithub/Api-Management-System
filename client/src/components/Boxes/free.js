import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ApiUsageDetails = () => {
  return (
    <Box
      boxShadow={3}
      p={2}
      m={2}
      textAlign="center"
      borderRadius={8}
      bgcolor="background.paper"
    >
      <Typography variant="h6" style={{ marginBottom: '10px', color: 'green' }}>
        Free Tier
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '5px' }}>
        Daily Limit: 50
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '5px' }}>
        Monthly Limit: 200
      </Typography>
    </Box>
  );
};

export default ApiUsageDetails;
