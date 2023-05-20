import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const inputRef = useRef(null);
  const renderRef = useRef(0);
  const nameRef = useRef('');
  const [name, setName] = useState('');
  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });
  useEffect(() => {
    nameRef.current = name;
  }, [name]);
  return (
    <div>
      {/* <label htmlFor="name">Name </label> */}
      <input
        id="name"
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        autocomplete="off"
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <h1>My name is {name}</h1>
      <h1>My prevName was {nameRef.current}</h1>
      <h1>Amount of renders: {renderRef.current}</h1>
    </div>
  );
}
