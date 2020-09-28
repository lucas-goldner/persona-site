import React from 'react';
import styled from 'styled-components';

const container = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 2.2fr 0.5fr 1fr;
gap: 1px 1px;
grid-template-areas:
  "."
  "."
  ".";
`

const PageOne = () => {
    return(
        <>
            <h1>Jo</h1>
        </>
    )
}

export default PageOne;