import React, { Component } from 'react';

import Alignment from "./traditionalComponents/alignment"
import Toggle from "./traditionalComponents/toggle"
import Counter from "./traditionalComponents/counter"
import Resizer from "./traditionalComponents/resizer"
import Color from "./traditionalComponents/color"
import Clock from "./traditionalComponents/clock"

import Example from "./hookComponents/stateExample"
import HookToggle from "./hookComponents/hooksToggle"
import EffectExample from "./hookComponents/effectExample"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Alignment />
        <hr />
        <Toggle />
        <hr />
        <Counter />
        <hr />
        <Resizer />
        <hr />
        <Color />
        <hr />
        <Clock /> */}

        <Example />
        <hr />
        <HookToggle />
        <hr />
        <EffectExample />
      </div>
    );
  }
}
