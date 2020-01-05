import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Udvozlom az erdeklodoket, ez a docker hasznalatat bemutato projektem.
          
          A felhasznalt technologiak: - React
                                      - Docker
                                      - Docker-compose
                                      - Github
                                      - Travis CI
                                      - NGNIX
                                      - AWS ElasticBeanstalk
          Github repository address: https://github.com/kissta-reference/docker-reference-project

          Udvozlettel,
          Kiss Tamas
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
