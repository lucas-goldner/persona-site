import React from 'react'
import styled from "styled-components";

const BG = styled.div`
background-image: url("p3.gif");
height: 100%; 
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

function PageOne() {
    return (
        <>
                <BG></BG>
        </>
    )
}

export default PageOne
