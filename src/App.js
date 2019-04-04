
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import tape from './tape.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tape} className="tape" alt="logo" />
	  <div className="player">
		<FontAwesomeIcon icon="play-circle" />
	    	<div className="song">
	    		<p>Some song</p>
	    	</div>
	    	<FontAwesomeIcon icon="backward"/>
	    	<FontAwesomeIcon icon="forward"/>
	  </div>
        </header>
      </div>
    );
  }
}

export default App;
