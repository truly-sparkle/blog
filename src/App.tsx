import React from 'react';
import './App.css';
import imgA from './assets/avatar.png';

const data = [{
    createdDate: '2021-03-27',
    title: '타이틀',
    subTitle: '서브타이틀',
    author: 'truly-sparkle',
    avatar: imgA,
    category: 'web',
}, {
    createdDate: '2021-03-28',
    title: '타이틀2',
    subTitle: '서브타이틀2',
    author: 'truly-sparkle',
    avatar: imgA,
    category: 'infra'
}]

function App() {
    return (
        <div className="App">
            <div className="profile">
                <div className="avatar-container">
                    <img className="avatar" src={imgA}/>
                </div>
                <div className="user-info">
                    <div>
                        Truly-Sparkle
                    </div>
                    <div>
                        안녕하세요.
                    </div>
                </div>
            </div>
            <div className="board">
                {data.map((value, index) => {
                    return (
                        <div style={{margin: '20px 0'}}>
                            <div style={{display: 'flex', alignItems: 'center',}}>
                                <div style={{margin: "0 10px"}}>{value.createdDate}</div>
                                <div style={{margin: "0 10px"}}>{value.author}</div>
                                <div style={{margin: "0 10px"}}><img className="avatar" src={value.avatar}/></div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                <div style={{margin: "0 20px"}}>
                                    <h1>{value.title}</h1>
                                </div>
                                <div style={{margin: "0 20px"}}>
                                    <span>{value.subTitle}</span>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
