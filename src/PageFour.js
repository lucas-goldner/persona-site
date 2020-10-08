import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import FourTrans from "./FourTrans";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useMoonSocialLinkStyles } from "@mui-treasury/styles/socialLink/round";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  sociallink: {
    color: "#fff",
    fill: "#fff",
    "&:hover": {
      color: "#e3afbc",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0.35)",
  },
  text: {
    display: "flex",
    color: "#000",
  },
  paper: {
    border: "2px solid #000",
    backgroundColor: "#fff",
  },
});

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function PageFour() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="ctBG">
        <FourTrans></FourTrans>
        <Container>
          <Grid
            container
            direction="column"
            justify="center"
            id="contact"
            spacing={2}
          >
            <Grid item>
              <Typography className="ctTitle" variant={"h2"}>Contact</Typography>
            </Grid>
            <Grid item>
              <Typography className="ctMail">Have a question or want to work together?</Typography>
            </Grid>
            <Grid item>
              <SocialProvider useStyles={useMoonSocialLinkStyles}>
                <SocialLink
                  brand={"Twitter"}
                  href={"https://twitter.com/LucasGoldner"}
                  className={classes.sociallink}
                />
                <SocialLink
                  brand={"Instagram"}
                  href={"https://instagram.com/lucas__el__rey"}
                  className={classes.sociallink}
                />
                <SocialLink
                  brand={"GithubCircle"}
                  href={"https://github.com/lucas-goldner"}
                  className={classes.sociallink}
                />
                <SocialLink
                  brand={"Envelope"}
                  href={"mailto:lucas.goldnerd@gmail.com"}
                  className={classes.sociallink}
                />
              </SocialProvider>
            </Grid>
            <Grid item>
              <Button onClick={handleOpen} className={classes.button}>
                Imprint
              </Button>
              <Modal
                aria-labelledby="Imprint"
                aria-describedby="The Imprint of this website"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <Typography
                      variant={"h2"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Imprint
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Data according to § 5 TMG
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      Lucas Goldner Persona(l) Site Heerstraße 13 71711 Murr
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Responsible for the content according to § 55 Section 2
                      RStV
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      Lucas Goldner Heerstraße 13 71711 Murr
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Mediation/Dispute Resolution
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      The European Commission is providing a platform for online
                      dispute resolution (OS):
                      https://ec.europa.eu/consumers/odr You can find our e-mail
                      address at the top of the imprint. We are not prepared or
                      obliged to participate in dispute resolution proceedings
                      before a consumer arbitration body to participate.
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Liability for Contents
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      As a service provider we are in accordance with § 7
                      Section 1 TMG for our own content on these pages according
                      to the general laws. According to §§ 8 to 10 TMG we are a
                      service provider not obliged, however, to monitor third
                      party information transmitted or stored on our website, or
                      to search for circumstances that indicate an illegal
                      activity. Obligations to remove or block the use of
                      information in accordance with general laws remain
                      unaffected by this. However, any liability in this respect
                      shall not become effective until the knowledge of a
                      concrete violation of the law. On becoming aware of
                      corresponding We will immediately remove any violations of
                      the law.
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Liability for Links
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      Our website contains links to external third-party
                      websites over whose content we have no control. Therefore,
                      we cannot accept any liability for these external
                      contents. The respective provider or operator of the
                      linked pages is always responsible for the content of the
                      linked pages. The linked pages were at the time of linking
                      to possible legal violations of the law checked. Illegal
                      contents were not recognizable at the time of linking.
                      However, a permanent control of the contents of the linked
                      pages is not possible without concrete indications of a
                      Violation of rights unreasonable. If we become aware of
                      any infringements of the law, we will delete such links.
                    </Typography>
                    <Typography
                      variant={"h5"}
                      id="Imprint"
                      className={classes.text}
                    >
                      Copyright
                    </Typography>
                    <Typography
                      variant={"h6"}
                      id="The Imprint of this website"
                      className={classes.text}
                    >
                      See "Media License" and "Code License". The code of this
                      website is licensed AGPL-3.0, the media is licensed
                      CC-BY-SA-4.0. As far as the contents on this site were not
                      created by the operator, the copyrights of third parties
                      are protected. observed. In particular, the contents of
                      third parties are marked as such. If you should
                      nevertheless click on If you become aware of a copyright
                      infringement, we ask you to inform us accordingly. On
                      becoming known we will remove such contents immediately.
                    </Typography>
                    <Button onClick={handleClose}>
                    Close Window
                  </Button>
                  </div>
                </Fade>
              </Modal>
            </Grid>
            <Grid item>
              <a href="#">
                <IconButton
                  variant="outlined"
                  size="large"
                  className="ctIconButton"
                >
                  <ExpandLessIcon />
                </IconButton>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default PageFour;