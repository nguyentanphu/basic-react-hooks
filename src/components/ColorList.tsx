import React from 'react'
import { ColorType } from '../color';
import Color from './Color';

interface Props {
  colors: ColorType[];
  onRemoveColor: (id: string) => void;
}

export default function ColorList({colors, onRemoveColor = f => f}: Props) {
  if (!colors.length) return <div>No colors listed!</div>
  return (
    <>
    {colors.map(c => <Color key={c.id} onRemove={onRemoveColor} {...c}/>)}
    </>
  )
}
