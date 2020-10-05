import React from "react";
import styled from "styled-components";
import { Container, Grid, Typography } from "@material-ui/core";
import FourTrans from "./FourTrans";

const BG = styled.div`
  background-color: rgb(65, 156, 188);
  font-family: "Roboto !important";
`;

const ContactTitle = styled(Typography)`
  font-family: "Roboto";
`;

function PageFour() {
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
            
            </Grid>
          </Grid>
        </Container>
      </BG>
    </>
  );
}

export default PageFour;
