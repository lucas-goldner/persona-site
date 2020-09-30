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
import SideDrawer from "./SideDrawer"

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

const navLinks = [
  { title: `About`, path: `#about` },
  { title: `Projects`, path: `#projects` },
  { title: `Contact`, path: `#contact` },
];

function PageTwo() {
  const classes = useStyles();
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
              className={classes.navDisplayFlex}>
              <SideDrawer navLinks={navLinks} />
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Toolbar>
        </TheAppBar>
      </BG>
    </>
  );
}

export default PageTwo;
