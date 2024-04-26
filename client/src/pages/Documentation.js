import React from "react";
import {
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Documentation() {
  return (
    <Container maxWidth="md" className="space-y-4">
      {/* <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}> */}
      <Typography variant="h3" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1">
        This document describes the resources that make up the official API
        application useful.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Creating an account
      </Typography>
      <Typography variant="body1">
        To access the API services, first create account by clicking on the
        logo.
      </Typography>
      <section>
        <Typography variant="h5" gutterBottom>
          Features
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="API Listing: Browse a catalog of available APIs." />
          </ListItem>
          <ListItem>
            <ListItemText primary="API Details: Access comprehensive information about each API, including endpoints, parameters, and documentation." />
          </ListItem>
          <ListItem>
            <ListItemText primary="API Testing: Test API endpoints directly within the application." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Authentication: Ensure secure access to sensitive APIs with support for two tiers of usage - free and paid." />
          </ListItem>
          <ListItem>
            <ListItemText primary="API Usage Analytics: Track usage statistics for each API to monitor performance and optimize resource allocation." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Customization: Customize and configure APIs according to user requirements." />
          </ListItem>
          <ListItem>
            <ListItemText primary="API Key Management: Create, delete, and copy API keys for secure access to APIs. API keys can be generated using buttons provided in the interface and can be used to fetch data for integration into user applications." />
          </ListItem>
        </List>
      </section>
      <section>
        <Typography variant="h5" gutterBottom>
          Installation
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Clone the repository from GitHub URL." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Navigate to the project directory." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Run npm install to install dependencies." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Run npm start to start the development server." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Access the application at http://localhost:3000 in your web browser." />
          </ListItem>
        </List>
      </section>
      {/* Add more sections as needed */}
      {/* </Paper> */}
    </Container>
  );
}

export default Documentation;
