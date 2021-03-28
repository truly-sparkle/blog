import React from "react";
import Photo from "../atoms/Photo";
import styled from "styled-components";

interface ProfilePhoto {
    photoUrl: any;
}

const ProfilePhotoContainer = styled.div`
  background-color: white;
  border-radius: 48px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 8px;
  margin-bottom: 24px;
`

const ProfilePhoto = ({photoUrl}: ProfilePhoto) => {
    return (
        <ProfilePhotoContainer>
            <Photo photoUrl={photoUrl} width={'100%'} height={'100%'}/>
        </ProfilePhotoContainer>
    )
}

export default ProfilePhoto;
