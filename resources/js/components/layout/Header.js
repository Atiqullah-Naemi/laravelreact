import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header(props) {
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="header-btn" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className="btn">
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
