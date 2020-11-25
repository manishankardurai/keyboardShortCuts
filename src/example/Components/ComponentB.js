import React, { useState } from 'react';
import { KeyboardShortcut } from '../../package';
import { notifications } from './ComponentA';

const AnotherComponent = () => {
  const [bg, setBg] = useState('orange');
  return (
    <div className="App">
      <KeyboardShortcut
        combo={'ctrl a'}
        description="Press 'ctrl a' to change color from orange"
        callback={() => {
          const val = bg === 'orange' ? '#5f5f4e' : '#dccdb0';
          notifications('ctrl a', "CallBack Trigger when pressing 'ctrl a'");
          setBg(val);
        }}
      />
      <div className="container">
        <div className="componentA setheight" style={{ backgroundColor: bg }}>
          {'Press "ctrl a"'}
        </div>
      </div>
    </div>
  );
};

export default AnotherComponent;
