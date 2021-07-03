import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { ColorType } from '../color'
import StarRating from './StarRating';

interface Props extends ColorType {
  onRemove: (id: string) => void;
}

export default function Color({id, title, color, rating, onRemove = (f: any) => f}: Props) {
  return (
    <section style={{width: 300}}>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{height: 50, backgroundColor: color}}></div>
      <StarRating selectedStars={rating}/>
    </section>
  )
}
