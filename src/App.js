import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
                <img src="https://img.icons8.com/doodle/140/000000/anonymous-mask.png"></img>
                <img src="https://img.icons8.com/doodle/140/000000/futurama-bender.png" />
                <img src="https://img.icons8.com/doodle/140/000000/walter-white.png"></img>
            </header>
        </div>
    );
};

export default App;
