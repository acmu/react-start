import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.less';

import {DatePicker } from 'antd';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>hi reac df t <span> this is span</span></h1>
        <DatePicker />
      </div>
    );
  }
}

export default hot(module)(App);
