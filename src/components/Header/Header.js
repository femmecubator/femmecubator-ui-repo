import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { API_PATH } from "../../utils/constants";
import { useAuth } from "../../context/auth";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#3E50B4",
    ["@media (min-width: 799px)"]: {
      paddingRight: "79px",
      paddingLeft: "118px",
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  menuDrawer: {
    marginRight: "19px",
  },
  joinBtn: {
    border: "1px solid white",
    color: "white",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    size: "16px",
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
  const {
    root,
    header,
    title,
    menuButtonsContainer,
    menuButton,
    menuDrawer,
    joinBtn,
  } = useStyles();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  const [menuHeaders, setMenuHeaders] = useState([]);
  const [mobileView, setMobileView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    axios
      .get(API_PATH.COMMON_MENU)
      .then(({ data: { headers } }) => setMenuHeaders(headers))
      .catch((err) => console.log(err));

    const setResponsiveness = () => {
      return window.innerWidth < 799
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const femmecubatorLogo = (
    <Typography variant="h6" className={title}>
      <Link
        {...{ href: "/", color: "inherit", style: { textDecoration: "none" } }}
      >
        Femmecubator
      </Link>
    </Typography>
  );

  // Get the menu header objects based on whether or not the user is logged in
  const getFilteredMenuHeadersObjs = () => {
    if (menuHeaders.length) {
      let menuHeadersToDisplay;

      if (isAuthenticated) {
        menuHeadersToDisplay = menuHeaders.filter(
          ({ href }) =>
            href === "/listings" || href === "/mentors" || href === "/logout"
        );
      } else {
        menuHeadersToDisplay = menuHeaders.filter(({ href }) => {
          return (
            href === "/get-involved" ||
            href === "/log-in" ||
            href === "/register"
          );
        });
      }

      return menuHeadersToDisplay;
    }
  };

  const getMenuButtons = () => {
    if (menuHeaders.length) {
      return getFilteredMenuHeadersObjs()
        .filter(({ href }) => href !== "/logout")
        .map(({ id, href, label }) => {
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

  const getDrawerChoices = () => {
    if (menuHeaders.length) {
      return getFilteredMenuHeadersObjs().map(({ id, href, label }) => (
        <Link
          {...{ href, color: "inherit", style: { textDecoration: "none" } }}
        >
          <MenuItem key={id}>{label}</MenuItem>
        </Link>
      ));
    }
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}
        <div className={menuButtonsContainer}>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          edge="start"
          className={menuDrawer}
          color="inherit"
          aria-label="menu"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
          keepMounted
          anchorEl={anchorEl}
        >
          {getDrawerChoices()}
        </Menu>

        {femmecubatorLogo}

        {!isAuthenticated && (
          <Button
            {...{
              variant: "outlined",
              size: "small",
              className: joinBtn,
              href: "/register",
            }}
          >
            JOIN
          </Button>
        )}
      </Toolbar>
    );
  };

  return (
    <header className={root}>
      <AppBar position="static" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
