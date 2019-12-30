import React from 'react';
import {useState} from 'react'


const App = ({saveForm}) => {
  const [value, setValue] = useState('')

  return (
    <form onSubmit = {(event) => {
        event.preventDefault();
        saveForm(value);
      }
    }>
      <input 
        type = "text"
        placeholder = "enter a name"
        value = {value}
        onChange = {(e) => setValue(e.target.value)}
        />
    </form>
  );
}

export default App;
