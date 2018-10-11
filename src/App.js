import React, { Component } from 'react';
import ContentNavigator from './componants/ContentNavigator.js';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <ContentNavigator/>
      </div>
    );
  }
}

export default App;
