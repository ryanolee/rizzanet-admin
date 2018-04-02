import React, { Component } from 'react';
import ContentNavigatorItem from './componants/ContentNavigator.js';


class App extends Component {
  render() {
    return (
      <div>
        <ContentNavigatorItem nodeID='1' label='root'/>
      </div>
    );
  }
}

export default App;
