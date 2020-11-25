import React, { useState } from 'react';
import { KeyboardShortcut } from '../../package';
import { store } from 'react-notifications-component';

export const notifications = (message, title) => {
  store.addNotification({
    title: title,
    message: message,
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    dismiss: {
      duration: 1000
    }
  });
};

const MyComponent = () => {
  const [backgrund, setBg] = useState('red');
  return (
    <div className="App">
      <KeyboardShortcut
        combo={'shift a'}
        description="Press 'shift a' to change color to green or red"
        callback={() => {
          const val = backgrund === 'red' ? 'green' : 'red';
          setBg(val);
          notifications('shift a', "CallBack Trigger when pressing 'shift a'");
        }}
      />
      <KeyboardShortcut
        combo={'cmd p'}
        description="Press 'cmd p' to change color to blue"
        callback={() => {
          setBg(backgrund === 'blue' ? 'yellow' : 'blue');
          notifications('cmd p', "CallBack Trigger when pressing 'cmd p'");
        }}
      />

      <div className="container">
        <div
          className="componentA setheight"
          style={{ backgroundColor: backgrund }}
        >
          {'Press "shift a" OR "cmd p"'}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
