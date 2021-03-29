import React from "react";
import ProfilePhoto from "../molecules/ProfilePhoto";
import imgA from "../assets/avatar.png";
import {Link} from "react-router-dom";
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
const AppContainer = styled.div`
  height: 100%;
  display: flex;
`

const BlogTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0;
`
const BoardTitle = styled.span`
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    color: #00a1ff;
    transition: color 0.3s;
  }
`

const data = [{
    createdDate: '2021-03-27',
    title: 'Debbie put her hand into the hole.',
    subTitle: 'Debbie put her hand into the hole, sliding her hand down as far as her arm could reach. She wiggled her fingers hoping to touch something, but all she felt was air. She shifted the weight of her body to try and reach an inch or two more down the hole. Her fingers still touched nothing but air.',
    author: 'truly-sparkle',
    avatar: imgA,
    category: 'web',
}, {
    createdDate: '2021-03-28',
    title: 'I recollect that my first exploit.',
    subTitle: 'I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.',
    author: 'truly-sparkle',
    avatar: imgA,
    category: 'infra'
}]

const Home = () => {
    return (<AppContainer className="App">
        <ProfileContainer>
            <BlogTitle>
                Yunchang's Blog
            </BlogTitle>
            <ProfilePhoto photoUrl={imgA}/>
            <div>
                안녕하세요. 개발자 최윤창 입니다.
            </div>
        </ProfileContainer>
        <div className="board" style={{
            width: '80%',
            margin: '0 5%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            {data.map((value, index) => {
                return (
                    <div style={{padding: '30px 0', width: '80%', borderBottom: '1px solid #dddddd'}}>
                        <div style={{marginBottom: '10px'}}>
                            <BoardTitle>
                                <Link to={`/board/${index}`}>{value.title}</Link>
                            </BoardTitle>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: "#DADADA",
                            marginBottom: '10px'
                        }}>
                            <div style={{marginRight: '10px'}}>{value.createdDate}</div>
                            <div style={{marginRight: '10px'}}>{value.author}</div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            width: '80%'
                        }}>
                            <div>
                                <span>{value.subTitle}</span>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    </AppContainer>);
}

export default Home
