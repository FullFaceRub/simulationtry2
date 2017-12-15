import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        {routes} 
      </div>
    );
  }
}

export default App;
