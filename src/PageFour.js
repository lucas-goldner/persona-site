import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@material-ui/core";
import FourTrans from "./FourTrans";
import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useMoonSocialLinkStyles } from "@mui-treasury/styles/socialLink/round";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sociallink: {
    color: "#fff",
    fill: "#fff",
  },
});

const BG = styled.div`
  background-color: rgb(65, 156, 188);
  font-family: "Roboto !important";
`;

const ContactTitle = styled(Typography)`
  font-family: "Roboto";
`;

const MailText = styled(Typography)`
  color: white;
`;

function PageFour() {
  const classes = useStyles();
  return (
    <>
      <BG>
        <FourTrans></FourTrans>
        <Container>
          <Grid container direction="column" justify="center">
            <Grid item>
              <ContactTitle variant={"h2"}>Contact</ContactTitle>
            </Grid>
            <Grid item>
              <MailText>Have a question or want to work together?</MailText>
            </Grid>
            <Grid item>
              <SocialProvider useStyles={useMoonSocialLinkStyles}>
                <SocialLink
                  brand={"Twitter"}
                  href={"https://twitter.com/GoldZuDemNerd"}
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
                  href={"https://github.com/lucas-goldner"}
                  className={classes.sociallink}
                />
              </SocialProvider>
            </Grid>
          </Grid>
        </Container>
      </BG>
    </>
  );
}

export default PageFour;
