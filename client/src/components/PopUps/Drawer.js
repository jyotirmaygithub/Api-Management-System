import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import {
  MenuOutlined,
  ApiOutlined,
  ExitToAppOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../context/States";
import { TokenStatusContext } from "../../context/tokenStatus";

const letterStyles = {
  backgroundColor: "#f0f0f0", // Change this to your desired color
  color: "#333", // Change this to your desired color
  width: 150,
  height: 150,
  fontSize: "72px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function AnchorTemporaryDrawer() {
  const navigate = useNavigate();
  const { userDocument } = StateContext();
  const { checkCookie, deleteAuthTokenCookie } = TokenStatusContext();
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => async (event) => {
    if (!checkCookie()) {
      navigate("/login");
    } else {
      setState({ ...state, [anchor]: open });
    }
  };

  function handleClick(value) {
    if (value === "Logout") {
      deleteAuthTokenCookie();
      navigate(`/login`);
    } else if (value === "Docs") {
      navigate(`/documentation`);
    } else {
      navigate(`/Api-usage`);
    }
  }
  const icons = [
    <ApiOutlined />,
    <DescriptionOutlined />,
    <ExitToAppOutlined />,
  ];
  const iconCount = icons.length;

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="grid justify-center items-center my-2 space-y-2">
        <Avatar sx={{ width: 150, height: 150 }} alt="User Avatar">
          <div style={letterStyles}>
            {userDocument.name && userDocument.name.charAt(0).toUpperCase()}
          </div>
        </Avatar>
      </div>
      <List>
        {["API Usage", "Docs", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
            <ListItemButton>
              <ListItemIcon>{icons[index % iconCount]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="avatar">
        <Button className="space-x-2" onClick={toggleDrawer("avatar", true)}>
          {/* Render your Avatar component here */}
          <MenuOutlined sx={{ color: "black" }} />
          <Avatar alt="User Avatar">
            <div className="text-black">
              {userDocument.name && userDocument.name.charAt(0).toUpperCase()}
            </div>
          </Avatar>
        </Button>
        <Drawer
          anchor="right"
          open={state["avatar"]}
          onClose={toggleDrawer("avatar", false)}
        >
          {list("avatar")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
