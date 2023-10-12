import React from 'react'
import styled from 'styled-components';


const ImageHolder = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

function Image(props) {
    return(
        <ImageHolder>
            <img src={props.source}/>
        </ImageHolder>
    );
}

export default Image;