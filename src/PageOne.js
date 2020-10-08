import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import { Container, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Cursor = {
  show: true,
  blink: true,
  element: "_",
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
};

function PageOne() {
  const [hover, setHover] = useState(false);
  const hoverOn = () => {
    setHover(true);
  };
  const hoverOff = () => {
    setHover(false);
  };
  return (
    <>
      <div className="BG">
          <Container>
            <Grid
              container
              justify="center"
              direction="column"
              spacing={2}
              id="home"
            >
            <div className="BGContainer">
              <Grid item>
                <Typography
                  align="center"
                  color="main"
                  variant="h1"
                  className="Title"
                >
                  Hello there
                </Typography>
              </Grid>
              </div>
              <Grid item>
                <Typography className="Title">
                  <Typist ms={1000} cursor={Cursor}>
                    I am <span className="TitleMark">Lucas Goldner</span>
                  </Typist>
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  align="center"
                  color="main"
                  variant="h1"
                  className="Title"
                >
                  Web- and Mobile Developer
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  href="#about"
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                  className="MoreButton"
                >
                  Start Tour
                  <ArrowForwardIcon className={hover ? "Arrow2":"Arrow"}/>
                </Button>
              </Grid>
            </Grid>
          </Container>
      </div>
      <d id="about"></d>
    </>
  );
}

export default PageOne;
