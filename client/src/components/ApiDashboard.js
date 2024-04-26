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

const CreateButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#2196F3", // Blue
  color: "white",
  "&:hover": {
    backgroundColor: "#1976D2", // Darker blue on hover
  },
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#F44336", // Red
  color: "white",
  "&:hover": {
    backgroundColor: "#D32F2F", // Darker red on hover
  },
}));

const CopyButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#FF9800", // Orange
  color: "white",
  "&:hover": {
    backgroundColor: "#F57C00", // Darker orange on hover
  },
}));

export default function Dashboard() {
  const { handleCreateAPI, handleDeleteAPI, handleFetchingAPI, fetchData, totalRequests } = useAPI();
  const { userDocument } = StateContext();
  const [apiKeyAvailable, setApiKeyAvailable] = useState(true);

  useEffect(() => {
    handleFetchingAPI();
    fetchData();
    totalRequests();
    // Check if API key is available
    if (userDocument && userDocument.apiKeys) {
      setApiKeyAvailable(true);
    } else {
      setApiKeyAvailable(false);
    }
  }, []);

  async function handleCreateApiKey() {
    const response = await handleCreateAPI();
    returnResponse(response);
  }

  async function handleDeleteApiKey() {
    const response = await handleDeleteAPI();
    returnResponse(response);
  }

  function handleCopyApiKey() {
    if (userDocument && userDocument.apiKeys) {
      // Simulate copying the API key to clipboard
      navigator.clipboard.writeText(userDocument.apiKeys);
      toast.success("Copied");
    } else {
      toast.info("No API key available to copy");
    }
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
      <CreateButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleCreateApiKey}
      >
        Create New API Key
      </CreateButton>
      <DeleteButton
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteApiKey}
      >
        Delete Old API Key
      </DeleteButton>
      <CopyButton
        variant="contained"
        startIcon={<FileCopyIcon />}
        onClick={handleCopyApiKey}
      >
        Copy API Key
      </CopyButton>
      {userDocument && userDocument.apiKeys ? (
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
      ) : (
        <Typography variant="subtitle1" gutterBottom>
          No API Key available.
        </Typography>
      )}
    </Root>
  );
}
