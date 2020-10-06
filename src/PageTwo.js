import React, { useState, useEffect } from "react";
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
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Container,
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
  root: {
    maxWidth: 240,
    fontFamily: "Robot",
  },
  media: {
    height: 200,
    paddingTop: "8%",
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
    8% 30%,
    5% 40%,
    0 36%,
    5% 44%,
    10% 39%,
    18% 52%,
    100% 64%,
    99% 30%,
    100% 25%,
    86% 23%,
    18% 28%,
    15% 39%
  );
`;

const TextBoxes = styled.div`
  margin-top: 48px !important;
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

const MobileTextBoxes = styled.div`
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

const BubbleContainer = styled.div`
  margin-top: 48px;
`;

const MobileBubble = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 300px;
  height: 265px;
  background-image: url(./BubbleTextMobile.png);
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

const SkillCardsContainer = styled(Grid)`
  margin-top: 48px !important;
`;

const TheContainer = styled(Container)`
  margin-top: 48px !important;
`;

const navLinks = [
  { title: `About`, path: `#about` },
  { title: `Skills`, path: `#skills` },
  { title: `Projects`, path: `#projects` },
  { title: `Contact`, path: `#contact` },
];

function PageTwo() {
  const classes = useStyles();
  const touchDevice = "ontouchstart" in document.documentElement;
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <BG>
        <TheAppBar
          position={scrollPosition > 670 ? "fixed" : "static"}
        >
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
        <Grid container justify="center" direction="column" id="about" >
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
          {touchDevice ? (
            <>
              <Grid item>
                <Hex></Hex>
              </Grid>
              <Grid item>
                <MobileBubble></MobileBubble>
              </Grid>
            </>
          ) : (
            <>
              <Grid container justify="center" direction="row">
                <Grid item>
                  <Hex></Hex>
                </Grid>
                <Grid item>
                  <BubbleContainer>
                    <Bubble></Bubble>
                  </BubbleContainer>
                </Grid>
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            {touchDevice ? (
              <>
                <MobileTextBoxes></MobileTextBoxes>
              </>
            ) : (
              <>
                <TextBoxes></TextBoxes>
              </>
            )}
          </Grid>
          <Grid item xs={12}>
          <div>
            <AboutTitle variant="h2" id="skills">My Skills</AboutTitle>
          </div>
        </Grid>
          <Grid item>
            <div class="content2">
              <div class="line2"></div>
            </div>
          </Grid>
          <Grid item xs={12}>
            {touchDevice ? (
              <>
                <Container maxWidth={false}>
                  <SkillCardsContainer
                    container
                    direction="row"
                    spacing={2}
                    justify="center"
                  >
                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./JSLogo.png"
                            title="JavaScript"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              JavaScript
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              I mainly use JavaScript for my Front-End and have
                              successfully completed the freeCodeCamp course.
                              Also learned ES6, because arrow functions make
                              life easier haha.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://de.wikipedia.org/wiki/JavaScript"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./ReactLogo.png"
                            title="React"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              React
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              React is currently my favourite library for coding
                              websites. In the future I am planning to switch to
                              React-Native for App-Coding.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://reactjs.org/"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>

                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./CSSLogo.png"
                            title="CSS"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              CSS
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              CSS for styling my components and HTML in general.
                              I also use styled components and frameworks like
                              MaterialUI to make everything straightforward.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://de.wikipedia.org/wiki/Cascading_Style_Sheet"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./HTMLLogo.png"
                            title="HMTL"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              HTML
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              Useful and neccessary for structuring and
                              presenting content on the Internet.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://en.wikipedia.org/wiki/HTML5"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./CPlusPlusLogo.png"
                            title="C++"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              C++
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              Learned the basics and more advanced concepts of
                              this programing language. Mainly used it for
                              making my own Games in the Unity Engine.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://de.wikipedia.org/wiki/C%2B%2B"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image="./JavaLogo.png"
                            title="Java"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Java
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              This was the first programing language I have
                              learned. During my first semester at the HdM I
                              have made a lot of progress. While it is not the
                              best language it is still good to know.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://java.com/en/"
                        >
                          Learn More
                        </Button>
                      </Card>
                      <Grid item>
                      <Typography>You found me haha</Typography>
                      </Grid>
                    </Grid>
                  </SkillCardsContainer>
                </Container>
              </>
            ) : (
              <>
                <TheContainer maxWidth={false}>
                  <Grid container direction="row" spacing={2}>
                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{ backgroundImage: "url('/JSLogo.png')" }}
                        >
                          <div className="inner">
                            <p>JavaScript</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              I mainly use JavaScript for my Front-End and have
                              successfully completed the freeCodeCamp course.
                              Also learned ES6, because arrow functions make
                              life easier haha.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{ backgroundImage: "url('/ReactLogo.png')" }}
                        >
                          <div className="inner">
                            <p>React</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              React is currently my favourite library for coding
                              websites. In the future I am planning to switch to
                              React-Native for App-Coding.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{ backgroundImage: "url('/CSSLogo.png')" }}
                        >
                          <div className="inner">
                            <p>CSS</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              CSS for styling my components and HTML in general.
                              I also use styled components and frameworks like
                              MaterialUI to make everything straightforward.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{ backgroundImage: "url('/HTMLLogo.png')" }}
                        >
                          <div className="inner">
                            <p>HTML</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              Useful and neccessary for structuring and
                              presenting content on the Internet.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{
                            backgroundImage: "url('/CPlusPlusLogo.png')",
                          }}
                        >
                          <div className="inner">
                            <p>C++</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              Learned the basics and more advanced concepts of
                              this programing language. Mainly used it for
                              making my own Games in the Unity Engine.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div
                          className="front"
                          style={{ backgroundImage: "url('/JavaLogo.png')" }}
                        >
                          <div className="inner">
                            <p>Java</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              This was the first programing language I have
                              learned. During my first semester at the HdM I
                              have made a lot of progress. While it is not the
                              best language it is still good to know.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </TheContainer>
              </>
            )}
          </Grid>
        </Grid>
      </BG>
    </>
  );
}

export default PageTwo;
