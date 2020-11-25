import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ShowActiveComponent from './Components/ShowActiveComponent';
import { withKeyboardShortcuts } from '../package';

class AppWrapper extends Component {
  render() {
    const { activeShortCuts } = this.props;
    return (
      <div className="ContainerClass">
        <div className="leftSide">
          <ComponentA />
          <ComponentB />
        </div>
        <div className="rightSide">
          <ShowActiveComponent activeKeys={activeShortCuts} />
          <p
            style={{
              float: 'right',
              padding: 0,
              margin: '50px'
            }}
          >
            What to know more about me (React keyboard shortcut).{' '}
            <a
              target="_blank"
              href="https://github.com/manishankardurai/keyboardShortCuts/blob/master/README.md"
            >
              {' '}
              Have a look at here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default withKeyboardShortcuts(AppWrapper);
