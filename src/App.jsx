import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col font-avenir">
      Hello Team Engine
      <div style={{ width: '100px', height: '40px' }}>
        <Button />
      </div>
    </div>
  );
}

export default App;
