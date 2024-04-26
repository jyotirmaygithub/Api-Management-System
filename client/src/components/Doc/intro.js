import React from "react";
import {
  Typography,
} from "@mui/material";

export default function features() {
  return (
    <div className="space-y-5">
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
        To access the API services, users need to click on the logo located on
        the front or landing page to create their account. API services will be
        accessible only after the account creation.
      </Typography>
    </div>
  );
}
