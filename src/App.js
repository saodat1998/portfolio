import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					{/* <Introduction></Introduction> */}
					<About></About>
					<Timeline></Timeline>
					<Skills></Skills>
					<Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
