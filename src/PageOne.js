import React from 'react'
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Typist from 'react-typist';

const BG = styled.div`
    background-image: url("p3.gif");
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const BGContainer = styled.div`
height: 50%;
overflow: auto;
margin: auto;
position: absolute;
top: 0; left: 0; bottom: 0; right: 0;
`

const Title = styled(Typography)`
    font-family: Roboto !important;
    font-size: 4rem !important;
`

const TitleMark = styled.span`
    color: #282828;
`

const Cursor = {
    show: true,
    blink: true,
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
}

function PageOne() {
    return (
        <>
            <BG>
            <BGContainer>
            <Grid container justify="center" direction="column">
                <Grid item>
                    <Title align="center" color="main" variant="h1">
                        Hello there
                    </Title>
                </Grid>
                <Grid item>
                    <Title>
                        <Typist ms={1000} cursor={Cursor}>
                            I am <TitleMark>Lucas Goldner</TitleMark>
                        </Typist>
                    </Title>
                </Grid>
            </Grid>
            </BGContainer>
            </BG>
        </>
    )
}

export default PageOne
