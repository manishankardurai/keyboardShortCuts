import React, { useState } from "react";
import { withKeyboardShortcuts, KeyboardShortcut } from "../../package/react-keypress";

const MyComponent = () => {
  const [bg, setBg] = useState("red");
  return (
    <div className="App">
      <KeyboardShortcut
        combo={"shift a"}
        description="Press 'shift a' to change color to green or red"
        callback={() => {
          const val = bg === "red" ? "green" : "red"
          setBg(val)
        }}
      />
      <KeyboardShortcut
        combo={"cmd p"}
        description="Press 'cmd p' to change color to blue"
        callback={() => {
          setBg(bg === "blue" ? "yellow" : "blue")
        }}
      />


      <div className='container'>
        <div className='componentA setheight' style={{ backgroundColor: bg }}>
          {'Press "shift a" OR "cmd p"'}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;



