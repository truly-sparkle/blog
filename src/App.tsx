import React from 'react';
import './App.css';
import imgA from './assets/avatar.png';


function App() {
    return (
        <div className="App">
            <div className="profile">
                <div className="avatar-container">
                    <img className="avatar" src={imgA} />
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
        </div>
    );
}

export default App;
