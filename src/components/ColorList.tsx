import React from 'react'
import Color from './Color';
import { useColor } from '../hooks/ColorProvider';

export default function ColorList() {
  const {colors} = useColor();

  if (!colors.length) return <div>No colors listed!</div>
  return (
    <>
    {colors.map(c => <Color key={c.id} {...c}/>)}
    </>
  )
}
