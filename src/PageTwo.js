import React from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";
import "./PageTwo.css";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `start`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const BG = styled.div`
  background-color: #e3e2df;
`;

const TheAppBar = styled(AppBar)`
  background-color: #5d001e !important;
`;

const ToolbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutTitle = styled(Typography)`
  color: #282828 !important;
  font-family: Roboto !important;
  margin-top: 16px !important;
  position: relative !important;

  animation: slideUp 0.5s 0.5s cubic-bezier(0.5, 0.53, 0.57, 0.53) both,
    fadeIn 0.6s 0.5s ease-in both;
  padding: 0 20px;
  position: absolute;
  text-align: center;
  top: 50%;

  @keyframes slideUp {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;



const navLinks = [
  { title: `About`, path: `#about` },
  { title: `Projects`, path: `#projects` },
  { title: `Contact`, path: `#contact` },
];

function PageTwo() {
  const classes = useStyles();
  const touchDevice = "ontouchstart" in document.documentElement;
  return (
    <>
      <BG>
        <TheAppBar position="static" id="about">
          <Toolbar>
            <ToolbarLink href="#" color="inherit">
              <Home edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />
              </Home>
            </ToolbarLink>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {touchDevice ? (
                <SideDrawer navLinks={navLinks} />
              ) : (
                <>
                  {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  ))}
                </>
              )}
            </List>
          </Toolbar>
        </TheAppBar>
        <Grid container justify="center" direction="column">
          <Grid item xs={12}>
            <div>
              <AboutTitle variant="h2">About</AboutTitle>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div class="content">
              <div class="line"></div>
            </div>
          </Grid>
        </Grid>
      </BG>
    </>
  );
}

export default PageTwo;
