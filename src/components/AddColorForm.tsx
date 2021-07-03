import React, { FormEvent, useRef } from 'react'
import { useInput } from '../hooks/useInput';

interface Props {
  onNewColor: (title: string, color: string) => void;
}

export default function AddColorForm({onNewColor}: Props) {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
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
