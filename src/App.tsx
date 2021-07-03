import React, { useState } from 'react';
import {v4} from 'uuid';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import colorData from './data.json';
import { ColorType } from './color';

function App() {
  const [colors, setColors] = useState(colorData as ColorType[]);
  const onRemoveColor = (id: string) => {
    const newColors = colors.filter(c => c.id !== id);
    setColors(newColors);
  };

  const onNewColor = (title: string, color: string) => {
    const newColors: ColorType[] = [
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];

    setColors(newColors);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddColorForm onNewColor={onNewColor}/>
        <ColorList colors={colors} onRemoveColor={onRemoveColor}/>
      </header>
    </div>
  );
}

export default App;
