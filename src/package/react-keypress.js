import React, { useEffect, useContext, createContext, Component } from 'react';
const keypress = require('keypress.js');

export const KeyboardContext = createContext({
  shortcuts: []
});

export const ContextProvider = KeyboardContext.Provider;
export const ContextConsumer = KeyboardContext.Consumer;

export const withKeyboardShortcuts = ChildComp =>
  class extends Component {
    state = {
      shortcuts: []
    };

    kpListener = new keypress.Listener();

    addShortcut = prop => {
      this.setState(state => ({ shortcuts: [...state.shortcuts, prop] }));
    };

    render() {
      return (
        <ContextProvider
          value={{
            kpListener: this.kpListener,
            shortcuts: this.state.shortcuts,
            addShortcut: this.addShortcut
          }}
        >
          <ChildComp {...this.props} activeShortCuts={this.state.shortcuts} />
        </ContextProvider>
      );
    }
  };

export const KeyboardShortcut = ({ combo, description, callback }) => {
  const state = useContext(KeyboardContext);

  useEffect(() => {
    if (state.kpListener) {
      state.kpListener.simple_combo(combo, event => {
        callback();
      });

      if (state) {
        state.addShortcut({
          shortcut: combo,
          description
        });
      }
    }

    return () => {
      if (state.kpListener) {
        state.kpListener.unregister_combo(combo);
      }
    };
  }, [state.kpListener]);

  return state.kpListener ? null : (
    <span>
      No context found. Wrap your component with "withKeyboardShortcuts"
    </span>
  );
};
