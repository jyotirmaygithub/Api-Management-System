import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function features() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Two-Tier Access: Offer both free and paid tiers for accessing APIs, ensuring flexibility and scalability based on user needs." />
        </ListItem>
        <ListItem>
          <ListItemText primary="API Key Management: Simplify access control by providing buttons to create, delete, and copy API keys, facilitating secure data retrieval exclusively for authorized users." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Graphical API Requests: Enhance user experience with graphical representations of API requests, allowing for intuitive monitoring and analysis of data flow." />
        </ListItem>
      </List>
    </div>
  );
}
