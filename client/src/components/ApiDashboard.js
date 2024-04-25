import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { styled } from "@mui/system";
import { useAPI } from "../context/api";
import { StateContext } from "../context/States";
import { toast } from "react-toastify";

const Root = styled("div")({
  padding: "24px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export default function Dashboard() {
  const { handleCreateAPI, handleDeleteAPI, handleFetchingAPI,fetchData,totalRequests } = useAPI();
  const {  userDocument } = StateContext();

  useEffect(() => {
    handleFetchingAPI();
    fetchData()
    totalRequests()
  }, []);

  async function handleCreateApiKey() {
    const respose = await handleCreateAPI();
    returnResponse(respose);
  }

  async function handleDeleteApiKey() {
    const response = await handleDeleteAPI();
    returnResponse(response);
  }

  function handleCopyApiKey() {
    // Simulate copying the API key to clipboard
    navigator.clipboard.writeText(userDocument.apiKeys);
  }
  
  // for toast of the toastify.
  function returnResponse(response) {
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  }

  return (
    <Root>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <StyledButton
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleCreateApiKey}
      >
        Create New API Key
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteApiKey}
      >
        Delete Old API Key
      </StyledButton>
      <StyledButton
        variant="contained"
        startIcon={<FileCopyIcon />}
        onClick={handleCopyApiKey}
      >
        Copy API Key
      </StyledButton>
      {userDocument && (
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Your API Key:
          </Typography>
          <input
            type="text"
            value={userDocument.apiKeys}
            readOnly
            style={{ width: "100%", marginBottom: "16px" }}
          />
        </div>
      )}
    </Root>
  );
}
