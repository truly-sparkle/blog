import ProfilePhoto from "./ProfilePhoto";
import imgA from "../assets/avatar.png";
import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 20%;
  height: 100%;
  background: linear-gradient(to left top, #00a1ff, #2bba7c);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const BlogTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0;
`
const Profile = () => {
    return (
        <ProfileContainer>
            <BlogTitle>
                Yunchang's Blog
            </BlogTitle>
            <ProfilePhoto photoUrl={imgA}/>
            <div>
                안녕하세요. 개발자 최윤창 입니다.
            </div>
        </ProfileContainer>
    )
}
export default Profile;
