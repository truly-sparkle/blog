import React from "react";
import styled from "styled-components";

type PhotoType = {
    photoUrl?: any;
    width?: any;
    height?: any;
}

const PhotoDiv = styled.div<PhotoType>`
  background-image: url(${props => props.photoUrl});
  background-size: cover;
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
`


const Photo = ({photoUrl, width, height}: PhotoType) => {

    return (
        <PhotoDiv photoUrl={photoUrl} width={width} height={height}/>
    )
}

export default Photo;
