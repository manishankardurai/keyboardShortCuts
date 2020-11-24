React Keypress.js ShortCuts
---


React KeyboarShortcut is to listen, keydown and keyup keyboard events, defining and  dispatching keyboard shortcuts. Uses a plugin from native javascript of [keypress.js](http://dmauro.github.io/Keypress/) for keypress detection based on given combo.

## Example

### Install

NOTE: Not published in package as of now. But in future if so, then you can install it like below

```sh
npm i -S react-keypress-js
```

You can listen to the event by calling the KeyboardShortcut component on your react components

```js
import { withKeyboardShortcuts, KeyboardShortcut } from "react-keypress-js";

  <KeyboardShortcut
        combo={"shift a"}
        description="Press shift a to change color to green or red"
        callback={() =>{
            //your callback func
        } }
      />
```

Also To get the active shortcut keys you can use a HOC function like below by passing your own component

```js
  export default withKeyboardShortcuts(AppWrapper);
```
You will get those list of active Short cut keys in Component Props.

### Demo

Preview [demo](https://manisankar-reactkshortcut.herokuapp.com/). 

Example: 

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentA from './ComponentA'
import ShowActiveComponent from './ShowActiveComponent';
import { withKeyboardShortcuts, KeyboardShortcut } from "react-keypress-js";

class AppWrapper extends Component {
  render() {
    const { activeShortCuts } = this.props;
    return (
      <div className='ContainerClass'>
            <ComponentA />
            <ShowActiveComponent activeKeys={activeShortCuts}/>
      </div>
    )
  }
}

export default withKeyboardShortcuts(AppWrapper);
```

#### Component A

```js

import React, { useState } from "react";
import { withKeyboardShortcuts, KeyboardShortcut } from "./multipleKeyHandler";

const ComponentA = ({activeShortCuts}) => {
  const [bg, setBg] = useState("red");
  return (
    <div className="App">
        //Your own Element

        //If you want to have multiple shortcut keys, you can call our KeyboardShortcut component by passing required props.

      <KeyboardShortcut
        combo={"shift a"}
        description="Press shift a to change color to green or red"
        callback={() =>{
            //your callback func
        } }
      />

       <KeyboardShortcut
          combo={"q"}
          description="Press q to change color to blue"
          callback={() =>{
              //your callback func
          }}
        />
    </div>
  );
};

export default ComponentA;

```
