import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB';
import ShowActiveComponent from './Components/ShowActiveComponent';
import { withKeyboardShortcuts} from '../package/react-keypress'

class AppWrapper extends Component {
  render() {
    const { activeShortCuts } = this.props;
    return (
      <div className='ContainerClass'>
          <div className='leftSide'>
             <ComponentA></ComponentA>
             <ComponentB/>
          </div>
          <div className='rightSide'>
            <ShowActiveComponent activeKeys={activeShortCuts}/>
        </div>
      </div>
    )
  }
}

export default withKeyboardShortcuts(AppWrapper);
