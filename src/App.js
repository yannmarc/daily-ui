import React from 'react';
import Dropdown from './components/Dropdown';
import Form from './components/Form';
import Input from './components/Input';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="App bg-gray-100 h-screen flex justify-center items-center">
      <div className="wrapper grid">
        <Instructions />
        <Form />
      </div>
    </div>
  );
}

export default App;
