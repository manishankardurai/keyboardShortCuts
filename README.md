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

Also To get the active shortcut keys you can use a HOC function like below by wrapping your own parent component

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

const ComponentA = () => {
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


#### Explanation About the Approach

To listen the pressed keyboard keys, use `<KeyboardShortcut />` with below props. 

Props | Description | 
--- | --- | 
combo | Passing keys as string | 
description | description of your keyboard shortcut
callback | callback function that need to trigger on pressing your combo key


Internally this will listen to listener constructed using [keypress.js](http://dmauro.github.io/Keypress/) with simple_combo API on mounting and will unregister on unmounting. 

You can get the activeShortCuts by wrapping with HOC function called `withKeyboardShortcuts` along your own parent component which holds `KeyboardShortcut` as child. So that you will receive a list of active shortcut as prop called `activeShortCuts` on your own component for display in help page. 
