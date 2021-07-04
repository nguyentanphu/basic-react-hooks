import React, { useEffect, useState } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';

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
