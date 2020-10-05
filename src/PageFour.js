import React from "react";
import styled from "styled-components";

const BG = styled.div`
  background-color: rgb(65, 156, 188);
`;

const SVG = styled.svg`
    fill: #e3afbc;
`

function PageFour() {
  return (
    <>
      <BG>
        <div class="custom-shape-divider-top-1601913997">
          <SVG
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </SVG>
        </div>
      </BG>
    </>
  );
}

export default PageFour;
