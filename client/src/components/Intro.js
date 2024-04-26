import React from "react";
import Typography from "@mui/material/Typography";
import { StateContext } from "../context/States";

export default function Intro (){
  const { userDocument } = StateContext();
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {userDocument.name}!
      </Typography>
      <Typography variant="body1">
        Our application offers API key generation for accessing its data and
        provides a dedicated page to track API usage.
      </Typography>
    </div>
  );
};

