import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SwitchBtn() {
  const navigate = useNavigate();


  function handleClick() {
      navigate("/Api-usage");
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
        API Usage
      </Button>
    </div>
  );
}
