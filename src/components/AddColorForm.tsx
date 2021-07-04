import React, { FormEvent, useEffect, useRef } from 'react'
import { useInput } from '../hooks/useInput';
import { useColor } from '../hooks/colorHook';


export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const {addColor} = useColor();

  const submit = (event: FormEvent) => {
    event.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  }
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
