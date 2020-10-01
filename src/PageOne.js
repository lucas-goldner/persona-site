import React, {useState} from 'react'
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typist from 'react-typist';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const BG = styled.div`
    background-image: url("p3.gif");
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const BGContainer = styled.div`
    height: 80%;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: 5; left: 0; bottom: 0; right: 0;
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

const MoreButton = styled(Button)`
    margin-top: 16px !important;
    color: #E3E2DF !important;
    border-color: #E3E2DF !important;
    border-radius: 2px !important;
    :hover {
        background-color: #EE4C7C !important;
        border-color: #EE4C7C !important;
    }
`

const TheArrowLeft = styled(ArrowForwardIcon)`
    overflow: hidden;
    transition-duration: 0.8s;
    transition-property: transform;
`

const TheArrowDown = styled(ArrowForwardIcon)`
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
`

function PageOne() {
    const [hover, setHover] = useState(false);
    const hoverOn = () => {setHover(true)}
    const hoverOff = () => {setHover(false)}
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
                <Grid item>
                    <Title align="center" color="main" variant="h1">
                        Web- and Mobile Developer
                    </Title>
                </Grid>
                <Grid item>
                    <MoreButton variant="outlined" size="large" href="#about" onMouseEnter={hoverOn} 
                    onMouseLeave={hoverOff} endIcon={hover ? (<TheArrowDown/>):(<TheArrowLeft/>)}>
                        Start Tour 
                    </MoreButton>
                </Grid>
            </Grid>
            </BGContainer>
            </BG>
        </>
    )
}

export default PageOne
