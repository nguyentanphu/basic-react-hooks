import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { ColorType } from '../color'
import StarRating from './StarRating';
import { useColor } from '../hooks/ColorProvider';


export default function Color({id, title, color, rating}: ColorType) {
  const {removeColor} = useColor();

  return (
    <section style={{width: 300}}>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{height: 50, backgroundColor: color}}></div>
      <StarRating selectedStars={rating}/>
    </section>
  )
}
