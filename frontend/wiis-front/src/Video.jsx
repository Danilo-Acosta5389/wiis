import React from 'react'
import styled from 'styled-components';


const VideoHolder = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;


const VideoLoop = styled.video`
  height: 100vh;
`;


function Video (props) {
    return(
      <VideoHolder>
        <VideoLoop className="video" muted={true} loop={true} autoPlay={true}>
          <source src={props.video} type="video/mp4"/>Your web-browser does not support video background
        </VideoLoop>
      </VideoHolder>
    )
}

export default Video;