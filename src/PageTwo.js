import React, { useState, useEffect } from "react";
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
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";

const navLinks = [
  { title: `About`, path: `#about` },
  { title: `Skills`, path: `#skills` },
  { title: `Projects`, path: `#projects` },
  { title: `Contact`, path: `#contact` },
];

function PageTwo() {
  const [scrollPosition, setSrollPosition] = useState(0);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
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
      <div className="abtBG">
        <AppBar
          className="theAppBar"
          position={scrollPosition > 670 ? "fixed" : "static"}
        >
          <Toolbar>
            <Link className="ToolBarLink" href="#" color="inherit">
              <Home edge="start" color="inherit" aria-label="home">
                <Home fontSize="large" />
              </Home>
            </Link>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className="navDisplayFlex"
            >
              {touchDevice ? (
                <SideDrawer navLinks={navLinks} />
              ) : (
                <>
                  {navLinks.map(({ title, path }) => (
                    <a href={path} key={title} className="linkText">
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  ))}
                </>
              )}
            </List>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" direction="column">
          <Grid item xs={12}>
            <div>
              <Typography className="abtTitle" variant="h2">
                About
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="content">
              <div className="line"></div>
            </div>
          </Grid>
          {touchDevice ? (
            <>
              <Grid item>
                <div className="Hex"></div>
              </Grid>
              <Grid item>
                <div className="MobileBubble"></div>
              </Grid>
            </>
          ) : (
            <>
              <Grid container justify="center" direction="row">
                <Grid item>
                  <div className="Hex"></div>
                </Grid>
                <Grid item>
                  <div className="BubbleContainer">
                    <div className="Bubble"></div>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            {touchDevice ? (
              <>
                <div className="MobileTextBoxes"></div>
              </>
            ) : (
              <>
                <div className="TextBoxes"></div>
              </>
            )}
            <d id="skills"></d>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography className="abtTitle" variant="h2">
                My Skills
              </Typography>
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
                  <Grid
                    className="SkillCardsContainer"
                    container
                    direction="row"
                    spacing={2}
                    justify="center"
                  >
                    <Grid item>
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia className="CardMedia" title="JavaScript" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              JavaScript
                            </Typography>
                            <div id="JSTwo" />
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
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/ReactLogo.png"
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
                            <div id="ReactTwo" />
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
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/CSSLogo.png"
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
                            <div id="CSSTwo" />
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
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/HTMLLogo.png"
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
                            <div id="HTMLTwo" />
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
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/CPlusPlusLogo.png"
                            title="C#"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              C#
                            </Typography>
                            <div id="CPlusPlusTwo" />
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
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/Adobe.png"
                            title="Creative Cloud"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Creative Cloud
                            </Typography>
                            <div id="AdobeTwo" />
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              I am very experienced in Photoshop, have edited a
                              lot of videos in Premiere Pro and After Effects
                              and saved audio recordings in Audition. At the
                              moment I am learning Illustrator.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          size="small"
                          color="primary"
                          href="https://www.adobe.com/#"
                        >
                          Learn More
                        </Button>
                      </Card>
                    </Grid>

                    <Grid item>
                      <Card className="Cards">
                        <CardActionArea>
                          <CardMedia
                            className="CardMedia"
                            image="../img/JavaLogo.png"
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
                            <div id="JavaTwo" />
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
                  </Grid>
                </Container>
              </>
            ) : (
              <>
                <Container className="TheContainer" maxWidth={false}>
                  <Grid container direction="row" spacing={2}>
                    <div
                      className="col"
                      ontouchstart="this.classList.toggle('focus');"
                    >
                      <div className="container">
                        <div className="front" id="JS">
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
                        <div className="front" id="React">
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
                        <div className="front" id="CSS">
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
                        <div className="front" id="HTML">
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
                        <div className="front" id="CPlusPlus">
                          <div className="inner">
                            <p>C#</p>
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
                        <div className="front" id="Adobe">
                          <div className="inner">
                            <p>Creative Cloud</p>
                          </div>
                        </div>
                        <div className="back">
                          <div className="inner">
                            <p>
                              I am very experienced in Photoshop, have edited a
                              lot of videos in Premiere Pro and After Effects
                              and saved audio recordings in Audition. At the
                              moment I am learning Illustrator.
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
                        <div className="front" id="Java">
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
                </Container>
              </>
            )}
          </Grid>
        </Grid>
        <d id="projects"></d>
      </div>
    </>
  );
}

export default PageTwo;
