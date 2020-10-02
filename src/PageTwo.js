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

const Hex = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 48px;
  width: 240px;
  height: 265px;
  background-image: url("./me.png");
  background-position: end;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  animation: 1s turn 1;
  backface-visibility: visible;
  @keyframes turn {
    40% {
        perspective(300px)
        translateZ(80px)
        rotateY(170deg);
    }
    50% {
      transform: 
        perspective(300px)
        translateZ(80px)
        rotateY(190deg);
    }
    80%, 100% {
      transform: 
        perspective(300px)
        translateZ(0px)
        rotateY(360deg);
    }
  }
`;

const Bubble = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 300px;
  height: 265px;
  background-image: url(./BubbleText.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(
    7% 12%,
    18% 11%,
    21% 23%,
    100% 14%,
    91% 65%,
    0 52%,
    8% 29%,
    11% 16%,
    0 16%,
    6% 0
  );
`;

const TextBoxes = styled.div`
  background-image: url(./textbubblestext.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  margin: auto;
  clip-path: polygon(
    19% 20%,
    18% 0,
    92% 0,
    94% 22%,
    77% 22%,
    79% 43%,
    100% 43%,
    100% 71%,
    81% 72%,
    81% 100%,
    0 100%,
    0 74%,
    23% 73%,
    21% 47%,
    0 48%,
    0 21%
  );
  background-color: black;
  width: 300px;
  height: 265px;
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
          <Grid item xs={12}>
            <Hex></Hex>
          </Grid>
          <Grid item xs={12}>
            <Bubble></Bubble>
          </Grid>
          <Grid item xs={12}>
            <TextBoxes></TextBoxes>
          </Grid>
        </Grid>
      </BG>
    </>
  );
}

export default PageTwo;
