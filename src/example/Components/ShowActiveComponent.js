import React, { useState } from 'react';
import {
  KeyboardShortcut,
  withKeyboardShortcuts
} from '../../package/react-keypress';

const ShowActiveComponent = ({ activeKeys }) => {
  return (
    <div className="container">
      <div
        className="componentA setheight activeKeys"
        style={{ border: '1px solid #461919' }}
      >
        <h5>Active Keys</h5>
        {activeKeys.length
          ? activeKeys.map((item, index) => {
              return (
                <ul>
                  <li>
                    {item.shortcut} - {item.description}
                  </li>
                </ul>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ShowActiveComponent;
