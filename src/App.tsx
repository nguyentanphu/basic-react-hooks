import React, { useState } from 'react';
import {v4} from 'uuid';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import colorData from './data.json';
import { ColorType } from './color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddColorForm />
        <ColorList />
      </header>
    </div>
  );
}

export default App;
