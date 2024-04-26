import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SwitchBtn() {
  const navigate = useNavigate();


  function handleClick() {
      navigate("/documentation");
  }
  return (
    <div>
      <Button
        onClick={handleClick}
        sx={{
          color: "black",
          "&:hover": {
            background : "white",
            color: "green",
          },
        }}
      >
        Documentation
      </Button>
    </div>
  );
}
