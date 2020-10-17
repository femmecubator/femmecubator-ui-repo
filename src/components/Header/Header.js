import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { API_PATH } from "../../utils/constants";
import { useAuth } from "../../context/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#3E50B4",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    size: "24px",
  },
}));

export default function Header() {
  const { root, header, title, menuButtonsContainer, menuButton } = useStyles();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  const [menuHeaders, setMenuHeaders] = useState([]);

  useEffect(() => {
    axios
      .get(API_PATH.COMMON_MENU)
      .then(({ data: { headers } }) => setMenuHeaders(headers))
      .catch((err) => console.log(err));
  }, []);

  const getMenuButtons = () => {
    if (menuHeaders.length) {
      let menuHeadersToDisplay;

      if (isAuthenticated) {
        // - if a user is logged in then, "listings and mentors" is available
        menuHeadersToDisplay = menuHeaders.filter(
          ({ href }) => href === "/listings" || href === "/mentors"
        );
      } else {
        // if a user is not logged in, only the items "get involved, login, join us" is available
        menuHeadersToDisplay = menuHeaders.filter(({ href }) => {
          return (
            href === "/get-involved" ||
            href === "/log-in" ||
            href === "/register"
          );
        });
      }

      return menuHeadersToDisplay.map(({ id, href, label }) => {
        let color = label === "Join Us!" ? "#50E3C2" : "white";

        return (
          <Button
            {...{
              key: id,
              color: "inherit",
              href,
              className: menuButton,
              style: { color },
            }}
          >
            {label}
          </Button>
        );
      });
    }
  };

  const menuButtons = getMenuButtons();

  return (
    <header className={root}>
      <AppBar position="static" className={header}>
        <Toolbar>
          <Typography variant="h6" className={title}>
            Femmecubator
          </Typography>

          <div className={menuButtonsContainer}>{menuButtons}</div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
