import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={handleClick}
    >
      <ApiIcon className="h-8 w-8 md:h-10 md:w-10" />

      <span className="text-2xl font-bold ">API</span>
    </div>
  );
}
