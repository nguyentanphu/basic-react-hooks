import React, { createContext, useContext, useState } from 'react'
import colorData from '../data.json';
import { ColorType } from '../color';
import { v4 } from 'uuid';

interface IColorContext {
  colors: ColorType[];
  setColors: React.Dispatch<React.SetStateAction<ColorType[]>>;
  removeColor: (id: string) => void;
  addColor: (title: string, color: string) => void;
}

const ColorContext = createContext<IColorContext>({} as IColorContext);

export const useColor = () => useContext(ColorContext);

export function ColorProvider({children}: {children: any}) {
  const [colors, setColors] = useState<ColorType[]>(colorData);

  const removeColor = (id: string) => {
    const newColors = colors.filter(c => c.id !== id);
    setColors(newColors);
  };

  const addColor = (title: string, color: string) => {
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
    <ColorContext.Provider value={{colors, setColors, removeColor, addColor}}>
      {children}
    </ColorContext.Provider>
  )
}
