import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typist from 'react-typist';

const Title = styled.h1`
    color: whitesmoke;
    font-size: 10rem;

    @media (max-device-width: 450px){
        font-size: 2rem;
    }

    @media (min-device-width: 451px){
        font-size: 2rem;
    }

    @media (min-device-width: 600px){
        font-size: 4rem;
    }

    @media (min-device-width: 960px){
        font-size: 6rem;
    }

    @media (min-device-width: 1280px){
        font-size: 10rem;
    }

    @media (-webkit-min-device-pixel-ratio: 2){
        font-size: 8rem;
    }
`

const Title2 = styled.h2`
    color: whitesmoke;
    font-size: 8rem;

    @media (max-device-width: 450px){
        font-size: 2rem;
    }

    @media (min-device-width: 451px){
        font-size: 2rem;
    }

    @media (min-device-width: 600px){
        font-size: 3rem;
    }

    @media (min-device-width: 960px){
        font-size: 5rem;
    }

    @media (min-device-width: 1280px){
        font-size: 8rem;
    }

    @media (-webkit-min-device-pixel-ratio: 2){
        font-size: 5rem;
    }
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

const MoreButton = styled.button`
    background-color: whitesmoke;
    width: 70rem;
    max-width: 100%;
    height: 10rem;
    font-size: 6rem;
    text-align: center;

    @media (max-device-width: 450px){
        font-size: 2rem;
    }

    @media (min-device-width: 451px){
        font-size: 2rem;
    }

    @media (min-device-width: 600px){
        font-size: 4rem;
    }

    @media (min-device-width: 960px){
        font-size: 6rem;
    }

    @media (min-device-width: 1280px){
        font-size: 6rem;
    }

    @media (-webkit-min-device-pixel-ratio: 2){
        font-size: 8rem;
    }
`

const PageOne = () => {
    return(
        <>
            <Grid container direction="column" justify="flex-start" alignItems="stretch">
            <Grid item xs={12}>
            <Title><Typist ms={1000} cursor={Cursor}>Hello there,<br/>I am <TitleMark>Lucas Goldner</TitleMark></Typist></Title>
            </Grid>
            <Grid item>
            <Title2>Front-End Developer<br/> & Designer</Title2>
            </Grid>
            </Grid>
        </>
    )
}

export default PageOne;