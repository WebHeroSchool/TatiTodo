import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count} from './number';
import {length} from './number';

const flag = true;
let num = 5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
        	color:'red'
        }}>
          Hello world!
        </p>
        <p>
        	{'Number = ' + num} <br></br>
        	{45}<br></br>
        	{'23 + 1 = '} {23+1}<br></br>
        	{flag && 'Flag exist'}<br></br>
        	{flag ? 'Flag is true' : 'Flag is false'}<br></br>
        	{undefined}<br></br>
        	{null}<br></br>
        	{false}<br></br>
        	{true}
        </p>
        <p>
        	Use export and import: <br></br>
        	count * length = {count * length}
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
